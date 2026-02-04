export interface BibleVersion {
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

export const BIBLE_INDEX: BibleLanguage[] = [
  {
    "id": "af",
    "name": "Afrikaans",
    "nativeName": "Afrikaans",
    "versions": [
      {
        "id": "afri",
        "name": "AFRI",
        "abbreviation": "AFRI",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/AF-Afrikaans_afri.pdf"
      }
    ]
  },
  {
    "id": "sq",
    "name": "Albanian",
    "nativeName": "Shqip (Albanian)",
    "versions": [
      {
        "id": "albanian",
        "name": "ALBANIAN",
        "abbreviation": "ALBANI",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/SQ-Albanian_albanian.pdf"
      }
    ]
  },
  {
    "id": "am",
    "name": "Amharic",
    "nativeName": "አማርኛ (Amharic)",
    "versions": [
      {
        "id": "am_amh",
        "name": "AM_AMH",
        "abbreviation": "AM_AMH",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/AM-Amharic_am_amh.pdf"
      }
    ]
  },
  {
    "id": "ar",
    "name": "Arabic",
    "nativeName": "العربية (Arabic)",
    "versions": [
      {
        "id": "svd",
        "name": "SVD",
        "abbreviation": "SVD",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/AR-Arabic_svd.pdf"
      }
    ]
  },
  {
    "id": "bn",
    "name": "Bengali",
    "nativeName": "বাংলা (Bengali)",
    "versions": [
      {
        "id": "bn_irv",
        "name": "BN_IRV",
        "abbreviation": "BN_IRV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/BN-Bengali_bn_irv.pdf"
      }
    ]
  },
  {
    "id": "my",
    "name": "Burmese",
    "nativeName": "မြန်မာစာ (Burmese)",
    "versions": [
      {
        "id": "my_judson",
        "name": "MY_JUDSON",
        "abbreviation": "MY_JUD",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/MY-Burmese_my_judson.pdf"
      }
    ]
  },
  {
    "id": "zh",
    "name": "Chinese",
    "nativeName": "中文 (Chinese)",
    "versions": [
      {
        "id": "chinese_union_simp",
        "name": "CHINESE_UNION_SIMP",
        "abbreviation": "CHINES",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ZH-Chinese_chinese_union_simp.pdf"
      },
      {
        "id": "chinese_union_simp_s",
        "name": "CHINESE_UNION_SIMP_S",
        "abbreviation": "CHINES",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ZH-Chinese_chinese_union_simp_s.pdf"
      },
      {
        "id": "chinese_union_trad",
        "name": "CHINESE_UNION_TRAD",
        "abbreviation": "CHINES",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ZH-Chinese_chinese_union_trad.pdf"
      },
      {
        "id": "chinese_union_trad_s",
        "name": "CHINESE_UNION_TRAD_S",
        "abbreviation": "CHINES",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ZH-Chinese_chinese_union_trad_s.pdf"
      },
      {
        "id": "ckjv_sds",
        "name": "CKJV_SDS",
        "abbreviation": "CKJV_S",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ZH-Chinese_ckjv_sds.pdf"
      },
      {
        "id": "ckjv_sdt",
        "name": "CKJV_SDT",
        "abbreviation": "CKJV_S",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ZH-Chinese_ckjv_sdt.pdf"
      }
    ]
  },
  {
    "id": "cs",
    "name": "Czech",
    "nativeName": "Čeština (Czech)",
    "versions": [
      {
        "id": "bkr",
        "name": "BKR",
        "abbreviation": "BKR",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/CS-Czech_bkr.pdf"
      }
    ]
  },
  {
    "id": "nl",
    "name": "Dutch",
    "nativeName": "Nederlands (Dutch)",
    "versions": [
      {
        "id": "stve",
        "name": "STVE",
        "abbreviation": "STVE",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/NL-Dutch_stve.pdf"
      }
    ]
  },
  {
    "id": "en",
    "name": "English",
    "nativeName": "English",
    "versions": [
      {
        "id": "asv",
        "name": "American Standard Version",
        "abbreviation": "ASV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/EN-English_asv.pdf"
      },
      {
        "id": "asvs",
        "name": "American Standard Version (Strongs)",
        "abbreviation": "ASVS",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/EN-English_asvs.pdf"
      },
      {
        "id": "bishops",
        "name": "Bishops Bible",
        "abbreviation": "BISHOP",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/EN-English_bishops.pdf"
      },
      {
        "id": "coverdale",
        "name": "Coverdale Bible",
        "abbreviation": "COVERD",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/EN-English_coverdale.pdf"
      },
      {
        "id": "geneva",
        "name": "Geneva Bible",
        "abbreviation": "GENEVA",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/EN-English_geneva.pdf"
      },
      {
        "id": "kjv",
        "name": "King James Version",
        "abbreviation": "KJV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/EN-English_kjv.pdf"
      },
      {
        "id": "kjv_strongs",
        "name": "King James Version (Strongs)",
        "abbreviation": "KJV_ST",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/EN-English_kjv_strongs.pdf"
      },
      {
        "id": "net",
        "name": "New English Translation",
        "abbreviation": "NET",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/EN-English_net.pdf"
      },
      {
        "id": "tyndale",
        "name": "Tyndale Bible",
        "abbreviation": "TYNDAL",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/EN-English_tyndale.pdf"
      },
      {
        "id": "web",
        "name": "World English Bible",
        "abbreviation": "WEB",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/EN-English_web.pdf"
      }
    ]
  },
  {
    "id": "fi",
    "name": "Finnish",
    "nativeName": "Suomi (Finnish)",
    "versions": [
      {
        "id": "finn",
        "name": "FINN",
        "abbreviation": "FINN",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/FI-Finnish_finn.pdf"
      }
    ]
  },
  {
    "id": "fr",
    "name": "French",
    "nativeName": "Français (French)",
    "versions": [
      {
        "id": "epee",
        "name": "EPEE",
        "abbreviation": "EPEE",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/FR-French_epee.pdf"
      },
      {
        "id": "martin",
        "name": "MARTIN",
        "abbreviation": "MARTIN",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/FR-French_martin.pdf"
      },
      {
        "id": "oster",
        "name": "OSTER",
        "abbreviation": "OSTER",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/FR-French_oster.pdf"
      },
      {
        "id": "segond_1910",
        "name": "SEGOND_1910",
        "abbreviation": "SEGOND",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/FR-French_segond_1910.pdf"
      }
    ]
  },
  {
    "id": "de",
    "name": "German",
    "nativeName": "Deutsch (German)",
    "versions": [
      {
        "id": "elberfelder_1871",
        "name": "ELBERFELDER_1871",
        "abbreviation": "ELBERF",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/DE-German_elberfelder_1871.pdf"
      },
      {
        "id": "elberfelder_1905",
        "name": "ELBERFELDER_1905",
        "abbreviation": "ELBERF",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/DE-German_elberfelder_1905.pdf"
      },
      {
        "id": "luther",
        "name": "LUTHER",
        "abbreviation": "LUTHER",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/DE-German_luther.pdf"
      },
      {
        "id": "luther_1912",
        "name": "LUTHER_1912",
        "abbreviation": "LUTHER",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/DE-German_luther_1912.pdf"
      },
      {
        "id": "schlachter",
        "name": "SCHLACHTER",
        "abbreviation": "SCHLAC",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/DE-German_schlachter.pdf"
      }
    ]
  },
  {
    "id": "grc",
    "name": "Greek",
    "nativeName": "Ελληνική (Greek Koine)",
    "versions": [
      {
        "id": "tr",
        "name": "TR",
        "abbreviation": "TR",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/GRC-Greek_tr.pdf"
      },
      {
        "id": "trparsed",
        "name": "TRPARSED",
        "abbreviation": "TRPARS",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/GRC-Greek_trparsed.pdf"
      }
    ]
  },
  {
    "id": "gu",
    "name": "Gujarati",
    "nativeName": "ગુજરાતી (Gujarati)",
    "versions": [
      {
        "id": "gu_irv",
        "name": "GU_IRV",
        "abbreviation": "GU_IRV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/GU-Gujarati_gu_irv.pdf"
      }
    ]
  },
  {
    "id": "ht",
    "name": "Haitian, Haitian Creole",
    "nativeName": "Kreyòl Ayisyen (Haitian Creole)",
    "versions": [
      {
        "id": "hcv",
        "name": "HCV",
        "abbreviation": "HCV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/HT-Haitian_Haitian_Creole_hcv.pdf"
      }
    ]
  },
  {
    "id": "ha",
    "name": "Hausa",
    "nativeName": "Harshen Hausa (Hausa)",
    "versions": [
      {
        "id": "ha_con",
        "name": "HA_CON",
        "abbreviation": "HA_CON",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/HA-Hausa_ha_con.pdf"
      },
      {
        "id": "ha_lit",
        "name": "HA_LIT",
        "abbreviation": "HA_LIT",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/HA-Hausa_ha_lit.pdf"
      }
    ]
  },
  {
    "id": "he",
    "name": "Hebrew",
    "nativeName": "עברית (Hebrew)",
    "versions": [
      {
        "id": "he_modern",
        "name": "HE_MODERN",
        "abbreviation": "HE_MOD",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/HE-Hebrew_he_modern.pdf"
      },
      {
        "id": "wlc",
        "name": "WLC",
        "abbreviation": "WLC",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/HE-Hebrew_wlc.pdf"
      }
    ]
  },
  {
    "id": "hi",
    "name": "Hindi",
    "nativeName": "हिन्दी (Hindi)",
    "versions": [
      {
        "id": "irv",
        "name": "IRV",
        "abbreviation": "IRV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/HI-Hindi_irv.pdf"
      }
    ]
  },
  {
    "id": "hu",
    "name": "Hungarian",
    "nativeName": "Magyar (Hungarian)",
    "versions": [
      {
        "id": "karoli",
        "name": "KAROLI",
        "abbreviation": "KAROLI",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/HU-Hungarian_karoli.pdf"
      }
    ]
  },
  {
    "id": "id",
    "name": "Indonesian",
    "nativeName": "Bahasa Indonesia (Indonesian)",
    "versions": [
      {
        "id": "indo_tb",
        "name": "INDO_TB",
        "abbreviation": "INDO_T",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ID-Indonesian_indo_tb.pdf"
      },
      {
        "id": "indo_tm",
        "name": "INDO_TM",
        "abbreviation": "INDO_T",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ID-Indonesian_indo_tm.pdf"
      }
    ]
  },
  {
    "id": "it",
    "name": "Italian",
    "nativeName": "Italiano (Italian)",
    "versions": [
      {
        "id": "diodati",
        "name": "DIODATI",
        "abbreviation": "DIODAT",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/IT-Italian_diodati.pdf"
      }
    ]
  },
  {
    "id": "ja",
    "name": "Japanese",
    "nativeName": "日本語 (Japanese)",
    "versions": [
      {
        "id": "bungo",
        "name": "BUNGO",
        "abbreviation": "BUNGO",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/JA-Japanese_bungo.pdf"
      },
      {
        "id": "kougo",
        "name": "KOUGO",
        "abbreviation": "KOUGO",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/JA-Japanese_kougo.pdf"
      }
    ]
  },
  {
    "id": "jv",
    "name": "Javanese",
    "nativeName": "Basa Jawa (Javanese)",
    "versions": [
      {
        "id": "jv_jvn",
        "name": "JV_JVN",
        "abbreviation": "JV_JVN",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/JV-Javanese_jv_jvn.pdf"
      }
    ]
  },
  {
    "id": "kn",
    "name": "Kannada",
    "nativeName": "ಕನ್ನಡ (Kannada)",
    "versions": [
      {
        "id": "kn_irv",
        "name": "KN_IRV",
        "abbreviation": "KN_IRV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/KN-Kannada_kn_irv.pdf"
      },
      {
        "id": "kn_kjv",
        "name": "KN_KJV",
        "abbreviation": "KN_KJV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/KN-Kannada_kn_kjv.pdf"
      }
    ]
  },
  {
    "id": "ko",
    "name": "Korean",
    "nativeName": "한국어 (Korean)",
    "versions": [
      {
        "id": "korean",
        "name": "KOREAN",
        "abbreviation": "KOREAN",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/KO-Korean_korean.pdf"
      }
    ]
  },
  {
    "id": "lv",
    "name": "Latvian",
    "nativeName": "Latviešu (Latvian)",
    "versions": [
      {
        "id": "lv_gluck_8",
        "name": "LV_GLUCK_8",
        "abbreviation": "LV_GLU",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/LV-Latvian_lv_gluck_8.pdf"
      }
    ]
  },
  {
    "id": "lt",
    "name": "Lithuanian",
    "nativeName": "Lietuvių (Lithuanian)",
    "versions": [
      {
        "id": "lt_heritage",
        "name": "LT_HERITAGE",
        "abbreviation": "LT_HER",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/LT-Lithuanian_lt_heritage.pdf"
      }
    ]
  },
  {
    "id": "mi",
    "name": "Maori",
    "nativeName": "Te Reo Māori (Maori)",
    "versions": [
      {
        "id": "maori",
        "name": "MAORI",
        "abbreviation": "MAORI",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/MI-Maori_maori.pdf"
      }
    ]
  },
  {
    "id": "mr",
    "name": "Marathi",
    "nativeName": "मराठी (Marathi)",
    "versions": [
      {
        "id": "mr_irv",
        "name": "MR_IRV",
        "abbreviation": "MR_IRV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/MR-Marathi_mr_irv.pdf"
      }
    ]
  },
  {
    "id": "ne",
    "name": "Nepali",
    "nativeName": "नेपाली (Nepali)",
    "versions": [
      {
        "id": "ne_ulb",
        "name": "NE_ULB",
        "abbreviation": "NE_ULB",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/NE-Nepali_ne_ulb.pdf"
      }
    ]
  },
  {
    "id": "fa",
    "name": "Persian",
    "nativeName": "فارسی (Persian)",
    "versions": [
      {
        "id": "opt",
        "name": "OPT",
        "abbreviation": "OPT",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/FA-Persian_opt.pdf"
      }
    ]
  },
  {
    "id": "pl",
    "name": "Polish",
    "nativeName": "Polski (Polish)",
    "versions": [
      {
        "id": "pol_nbg",
        "name": "POL_NBG",
        "abbreviation": "POL_NB",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/PL-Polish_pol_nbg.pdf"
      },
      {
        "id": "pol_ubg",
        "name": "POL_UBG",
        "abbreviation": "POL_UB",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/PL-Polish_pol_ubg.pdf"
      },
      {
        "id": "polbg",
        "name": "POLBG",
        "abbreviation": "POLBG",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/PL-Polish_polbg.pdf"
      }
    ]
  },
  {
    "id": "pt",
    "name": "Portuguese",
    "nativeName": "Português (Portuguese)",
    "versions": [
      {
        "id": "almeida_ra",
        "name": "ALMEIDA_RA",
        "abbreviation": "ALMEID",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/PT-Portuguese_almeida_ra.pdf"
      },
      {
        "id": "almeida_rc",
        "name": "ALMEIDA_RC",
        "abbreviation": "ALMEID",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/PT-Portuguese_almeida_rc.pdf"
      },
      {
        "id": "blivre",
        "name": "BLIVRE",
        "abbreviation": "BLIVRE",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/PT-Portuguese_blivre.pdf"
      }
    ]
  },
  {
    "id": "pa",
    "name": "Punjabi Panjabi",
    "nativeName": "ਪੰਜਾਬੀ (Punjabi)",
    "versions": [
      {
        "id": "pa_irv",
        "name": "PA_IRV",
        "abbreviation": "PA_IRV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/PA-Punjabi_Panjabi_pa_irv.pdf"
      }
    ]
  },
  {
    "id": "ro",
    "name": "Romanian",
    "nativeName": "Română (Romanian)",
    "versions": [
      {
        "id": "cornilescu",
        "name": "CORNILESCU",
        "abbreviation": "CORNIL",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/RO-Romanian_cornilescu.pdf"
      },
      {
        "id": "fidela",
        "name": "FIDELA",
        "abbreviation": "FIDELA",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/RO-Romanian_fidela.pdf"
      }
    ]
  },
  {
    "id": "ru",
    "name": "Russian",
    "nativeName": "Русский (Russian)",
    "versions": [
      {
        "id": "synodal",
        "name": "SYNODAL",
        "abbreviation": "SYNODA",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/RU-Russian_synodal.pdf"
      }
    ]
  },
  {
    "id": "so",
    "name": "Somali",
    "nativeName": "Af-Soomaali (Somali)",
    "versions": [
      {
        "id": "so_jimale",
        "name": "SO_JIMALE",
        "abbreviation": "SO_JIM",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/SO-Somali_so_jimale.pdf"
      }
    ]
  },
  {
    "id": "es",
    "name": "Spanish",
    "nativeName": "Español (Spanish)",
    "versions": [
      {
        "id": "rv_1858",
        "name": "RV_1858",
        "abbreviation": "RV_185",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ES-Spanish_rv_1858.pdf"
      },
      {
        "id": "rv_1909",
        "name": "RV_1909",
        "abbreviation": "RV_190",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ES-Spanish_rv_1909.pdf"
      },
      {
        "id": "rv_1909_strongs",
        "name": "RV_1909_STRONGS",
        "abbreviation": "RV_190",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ES-Spanish_rv_1909_strongs.pdf"
      },
      {
        "id": "rvg",
        "name": "RVG",
        "abbreviation": "RVG",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ES-Spanish_rvg.pdf"
      },
      {
        "id": "rvg_2004",
        "name": "RVG_2004",
        "abbreviation": "RVG_20",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ES-Spanish_rvg_2004.pdf"
      },
      {
        "id": "sagradas",
        "name": "SAGRADAS",
        "abbreviation": "SAGRAD",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/ES-Spanish_sagradas.pdf"
      }
    ]
  },
  {
    "id": "sw",
    "name": "Swahili",
    "nativeName": "Kiswahili (Swahili)",
    "versions": [
      {
        "id": "swahili",
        "name": "SWAHILI",
        "abbreviation": "SWAHIL",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/SW-Swahili_swahili.pdf"
      }
    ]
  },
  {
    "id": "tl",
    "name": "Tagalog",
    "nativeName": "Wikang Tagalog (Tagalog)",
    "versions": [
      {
        "id": "tagab",
        "name": "TAGAB",
        "abbreviation": "TAGAB",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/TL-Tagalog_tagab.pdf"
      }
    ]
  },
  {
    "id": "tg",
    "name": "Tajik",
    "nativeName": "Тоҷикӣ (Tajik)",
    "versions": [
      {
        "id": "tg_tgk",
        "name": "TG_TGK",
        "abbreviation": "TG_TGK",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/TG-Tajik_tg_tgk.pdf"
      }
    ]
  },
  {
    "id": "ta",
    "name": "Tamil",
    "nativeName": "தமிழ் (Tamil)",
    "versions": [
      {
        "id": "ta_irv",
        "name": "TA_IRV",
        "abbreviation": "TA_IRV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/TA-Tamil_ta_irv.pdf"
      },
      {
        "id": "ta_oitce",
        "name": "TA_OITCE",
        "abbreviation": "TA_OIT",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/TA-Tamil_ta_oitce.pdf"
      }
    ]
  },
  {
    "id": "te",
    "name": "Telugu",
    "nativeName": "తెలుగు (Telugu)",
    "versions": [
      {
        "id": "te_irv",
        "name": "TE_IRV",
        "abbreviation": "TE_IRV",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/TE-Telugu_te_irv.pdf"
      }
    ]
  },
  {
    "id": "th",
    "name": "Thai",
    "nativeName": "ไทย (Thai)",
    "versions": [
      {
        "id": "thaikjv",
        "name": "THAIKJV",
        "abbreviation": "THAIKJ",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/TH-Thai_thaikjv.pdf"
      }
    ]
  },
  {
    "id": "bo",
    "name": "Tibetan",
    "nativeName": "བོད་སྐད་ (Tibetan)",
    "versions": [
      {
        "id": "bo_ntb",
        "name": "BO_NTB",
        "abbreviation": "BO_NTB",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/BO-Tibetan_bo_ntb.pdf"
      }
    ]
  },
  {
    "id": "tr",
    "name": "Turkish",
    "nativeName": "Türkçe (Turkish)",
    "versions": [
      {
        "id": "turkish",
        "name": "TURKISH",
        "abbreviation": "TURKIS",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/TR-Turkish_turkish.pdf"
      }
    ]
  },
  {
    "id": "ug",
    "name": "Uighur, Uyghur",
    "nativeName": "ئۇيغۇرچە (Uighur)",
    "versions": [
      {
        "id": "ug_ara",
        "name": "UG_ARA",
        "abbreviation": "UG_ARA",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/UG-Uighur_Uyghur_ug_ara.pdf"
      }
    ]
  },
  {
    "id": "ur",
    "name": "Urdu",
    "nativeName": "اردو (Urdu)",
    "versions": [
      {
        "id": "ur_geo",
        "name": "UR_GEO",
        "abbreviation": "UR_GEO",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/UR-Urdu_ur_geo.pdf"
      }
    ]
  },
  {
    "id": "vi",
    "name": "Vietnamese",
    "nativeName": "Tiếng Việt (Vietnamese)",
    "versions": [
      {
        "id": "cadman",
        "name": "CADMAN",
        "abbreviation": "CADMAN",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/VI-Vietnamese_cadman.pdf"
      }
    ]
  },
  {
    "id": "wo",
    "name": "Wolof",
    "nativeName": "Wolof",
    "versions": [
      {
        "id": "wo_kyg",
        "name": "WO_KYG",
        "abbreviation": "WO_KYG",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/WO-Wolof_wo_kyg.pdf"
      },
      {
        "id": "wo_wol_nt_2010",
        "name": "WO_WOL_NT_2010",
        "abbreviation": "WO_WOL",
        "filename": "https://github.com/arvinfathi/universal-bible-web/releases/download/v1.0-assets/WO-Wolof_wo_wol_nt_2010.pdf"
      }
    ]
  }
];
