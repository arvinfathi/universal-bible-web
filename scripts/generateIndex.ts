import fs from 'fs';
import path from 'path';

const BIBLES_DIR = path.join(process.cwd(), 'public/bibles');
const OUTPUT_FILE = path.join(process.cwd(), 'data/bibleIndex.json');

const LANGUAGE_NAMES: Record<string, string> = {
    'AF': 'Afrikaans',
    'AM': 'አማርኛ (Amharic)',
    'AR': 'العربية (Arabic)',
    'BN': 'বাংলা (Bengali)',
    'BO': 'བོད་སྐད་ (Tibetan)',
    'CS': 'Čeština (Czech)',
    'DE': 'Deutsch (German)',
    'EN': 'English',
    'ES': 'Español (Spanish)',
    'FA': 'فارسی (Persian)',
    'FI': 'Suomi (Finnish)',
    'FR': 'Français (French)',
    'GRC': 'Ελληνική (Greek Koine)',
    'GU': 'ગુજરાતી (Gujarati)',
    'HA': 'Harshen Hausa (Hausa)',
    'HE': 'עברית (Hebrew)',
    'HI': 'हिन्दी (Hindi)',
    'HT': 'Kreyòl Ayisyen (Haitian Creole)',
    'HU': 'Magyar (Hungarian)',
    'ID': 'Bahasa Indonesia (Indonesian)',
    'IT': 'Italiano (Italian)',
    'JA': '日本語 (Japanese)',
    'JV': 'Basa Jawa (Javanese)',
    'KN': 'ಕನ್ನಡ (Kannada)',
    'KO': '한국어 (Korean)',
    'LT': 'Lietuvių (Lithuanian)',
    'LV': 'Latviešu (Latvian)',
    'MI': 'Te Reo Māori (Maori)',
    'MR': 'मराठी (Marathi)',
    'MY': 'မြန်မာစာ (Burmese)',
    'NE': 'नेपाली (Nepali)',
    'NL': 'Nederlands (Dutch)',
    'PA': 'ਪੰਜਾਬੀ (Punjabi)',
    'PL': 'Polski (Polish)',
    'PT': 'Português (Portuguese)',
    'RO': 'Română (Romanian)',
    'RU': 'Русский (Russian)',
    'SO': 'Af-Soomaali (Somali)',
    'SQ': 'Shqip (Albanian)',
    'SW': 'Kiswahili (Swahili)',
    'TA': 'தமிழ் (Tamil)',
    'TE': 'తెలుగు (Telugu)',
    'TG': 'Тоҷикӣ (Tajik)',
    'TH': 'ไทย (Thai)',
    'TL': 'Wikang Tagalog (Tagalog)',
    'TR': 'Türkçe (Turkish)',
    'UG': 'ئۇيغۇرچە (Uighur)',
    'UR': 'اردو (Urdu)',
    'VI': 'Tiếng Việt (Vietnamese)',
    'WO': 'Wolof',
    'ZH': '中文 (Chinese)'
};

const VERSION_NAMES: Record<string, string> = {
    'asv': 'American Standard Version',
    'asvs': 'American Standard Version (Strongs)',
    'bishops': 'Bishops Bible',
    'coverdale': 'Coverdale Bible',
    'geneva': 'Geneva Bible',
    'kjv': 'King James Version',
    'kjv_strongs': 'King James Version (Strongs)',
    'net': 'New English Translation',
    'tyndale': 'Tyndale Bible',
    'web': 'World English Bible',
    'rvr60': 'Reina-Valera 1960',
    'nvi': 'Nueva Versión Internacional',
    'lsg': 'Louis Segond',
    'lut': 'Luther Bible',
    'cuv': 'Chinese Union Version',
    'syn': 'Synodal Translation'
};

const generateIndex = () => {
    if (!fs.existsSync(BIBLES_DIR)) {
        console.error(`Directory not found: ${BIBLES_DIR}`);
        return;
    }

    const languages = fs.readdirSync(BIBLES_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => {
            const dirName = dirent.name; // e.g., "EN-English"
            const parts = dirName.split('-');
            const id = parts[0].toUpperCase(); // standardize to upper for map lookup
            // Use mapping or fallback to directory name part
            const nativeName = LANGUAGE_NAMES[id] || parts[1] || parts[0];
            const englishName = parts[1] || parts[0]; // fallback

            const versionsDir = path.join(BIBLES_DIR, dirName);
            const versions = fs.readdirSync(versionsDir)
                .filter(file => file.endsWith('.pdf'))
                .map(file => {
                    const filename = file;
                    const vid = file.replace('.pdf', '').toLowerCase();
                    const name = VERSION_NAMES[vid] || vid.toUpperCase();
                    const abbreviation = vid.toUpperCase().substring(0, 6); // Simple abbreviation
                    return {
                        id: vid,
                        name,
                        abbreviation,
                        filename: `${dirName}/${filename}`
                    };
                })
                .sort((a, b) => a.name.localeCompare(b.name));

            return {
                id: id.toLowerCase(),
                name: englishName.replace(/_/g, ' '),
                nativeName: nativeName,
                versions
            };
        })
        .filter(lang => lang.versions.length > 0)
        .sort((a, b) => a.name.localeCompare(b.name));

    const tsContent = `export interface BibleVersion {
  id: string;
  name: string;
  abbreviation: string;
  filename: string;
}

export interface BibleLanguage {
  id: string;
  name: string;
  nativeName: string;
  versions: BibleVersion[];
}

export const BIBLE_INDEX: BibleLanguage[] = ${JSON.stringify(languages, null, 2)};
`;

    const tsOutputPath = path.join(process.cwd(), 'data/bibleIndex.ts');
    fs.writeFileSync(tsOutputPath, tsContent);
    console.log(`Generated index at ${tsOutputPath}`);
};

generateIndex();
