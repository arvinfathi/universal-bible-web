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
        "filename": "AF-Afrikaans/afri.pdf"
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
        "filename": "SQ-Albanian/albanian.pdf"
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
        "filename": "AM-Amharic/am_amh.pdf"
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
        "filename": "AR-Arabic/svd.pdf"
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
        "filename": "BN-Bengali/bn_irv.pdf"
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
        "filename": "MY-Burmese/my_judson.pdf"
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
        "filename": "ZH-Chinese/chinese_union_simp.pdf"
      },
      {
        "id": "chinese_union_simp_s",
        "name": "CHINESE_UNION_SIMP_S",
        "abbreviation": "CHINES",
        "filename": "ZH-Chinese/chinese_union_simp_s.pdf"
      },
      {
        "id": "chinese_union_trad",
        "name": "CHINESE_UNION_TRAD",
        "abbreviation": "CHINES",
        "filename": "ZH-Chinese/chinese_union_trad.pdf"
      },
      {
        "id": "chinese_union_trad_s",
        "name": "CHINESE_UNION_TRAD_S",
        "abbreviation": "CHINES",
        "filename": "ZH-Chinese/chinese_union_trad_s.pdf"
      },
      {
        "id": "ckjv_sds",
        "name": "CKJV_SDS",
        "abbreviation": "CKJV_S",
        "filename": "ZH-Chinese/ckjv_sds.pdf"
      },
      {
        "id": "ckjv_sdt",
        "name": "CKJV_SDT",
        "abbreviation": "CKJV_S",
        "filename": "ZH-Chinese/ckjv_sdt.pdf"
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
        "filename": "CS-Czech/bkr.pdf"
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
        "filename": "NL-Dutch/stve.pdf"
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
        "filename": "EN-English/asv.pdf"
      },
      {
        "id": "asvs",
        "name": "American Standard Version (Strongs)",
        "abbreviation": "ASVS",
        "filename": "EN-English/asvs.pdf"
      },
      {
        "id": "bishops",
        "name": "Bishops Bible",
        "abbreviation": "BISHOP",
        "filename": "EN-English/bishops.pdf"
      },
      {
        "id": "coverdale",
        "name": "Coverdale Bible",
        "abbreviation": "COVERD",
        "filename": "EN-English/coverdale.pdf"
      },
      {
        "id": "geneva",
        "name": "Geneva Bible",
        "abbreviation": "GENEVA",
        "filename": "EN-English/geneva.pdf"
      },
      {
        "id": "kjv",
        "name": "King James Version",
        "abbreviation": "KJV",
        "filename": "EN-English/kjv.pdf"
      },
      {
        "id": "kjv_strongs",
        "name": "King James Version (Strongs)",
        "abbreviation": "KJV_ST",
        "filename": "EN-English/kjv_strongs.pdf"
      },
      {
        "id": "net",
        "name": "New English Translation",
        "abbreviation": "NET",
        "filename": "EN-English/net.pdf"
      },
      {
        "id": "tyndale",
        "name": "Tyndale Bible",
        "abbreviation": "TYNDAL",
        "filename": "EN-English/tyndale.pdf"
      },
      {
        "id": "web",
        "name": "World English Bible",
        "abbreviation": "WEB",
        "filename": "EN-English/web.pdf"
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
        "filename": "FI-Finnish/finn.pdf"
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
        "filename": "FR-French/epee.pdf"
      },
      {
        "id": "martin",
        "name": "MARTIN",
        "abbreviation": "MARTIN",
        "filename": "FR-French/martin.pdf"
      },
      {
        "id": "oster",
        "name": "OSTER",
        "abbreviation": "OSTER",
        "filename": "FR-French/oster.pdf"
      },
      {
        "id": "segond_1910",
        "name": "SEGOND_1910",
        "abbreviation": "SEGOND",
        "filename": "FR-French/segond_1910.pdf"
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
        "filename": "DE-German/elberfelder_1871.pdf"
      },
      {
        "id": "elberfelder_1905",
        "name": "ELBERFELDER_1905",
        "abbreviation": "ELBERF",
        "filename": "DE-German/elberfelder_1905.pdf"
      },
      {
        "id": "luther",
        "name": "LUTHER",
        "abbreviation": "LUTHER",
        "filename": "DE-German/luther.pdf"
      },
      {
        "id": "luther_1912",
        "name": "LUTHER_1912",
        "abbreviation": "LUTHER",
        "filename": "DE-German/luther_1912.pdf"
      },
      {
        "id": "schlachter",
        "name": "SCHLACHTER",
        "abbreviation": "SCHLAC",
        "filename": "DE-German/schlachter.pdf"
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
        "filename": "GRC-Greek/tr.pdf"
      },
      {
        "id": "trparsed",
        "name": "TRPARSED",
        "abbreviation": "TRPARS",
        "filename": "GRC-Greek/trparsed.pdf"
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
        "filename": "GU-Gujarati/gu_irv.pdf"
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
        "filename": "HT-Haitian,_Haitian_Creole/hcv.pdf"
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
        "filename": "HA-Hausa/ha_con.pdf"
      },
      {
        "id": "ha_lit",
        "name": "HA_LIT",
        "abbreviation": "HA_LIT",
        "filename": "HA-Hausa/ha_lit.pdf"
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
        "filename": "HE-Hebrew/he_modern.pdf"
      },
      {
        "id": "wlc",
        "name": "WLC",
        "abbreviation": "WLC",
        "filename": "HE-Hebrew/wlc.pdf"
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
        "filename": "HI-Hindi/irv.pdf"
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
        "filename": "HU-Hungarian/karoli.pdf"
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
        "filename": "ID-Indonesian/indo_tb.pdf"
      },
      {
        "id": "indo_tm",
        "name": "INDO_TM",
        "abbreviation": "INDO_T",
        "filename": "ID-Indonesian/indo_tm.pdf"
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
        "filename": "IT-Italian/diodati.pdf"
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
        "filename": "JA-Japanese/bungo.pdf"
      },
      {
        "id": "kougo",
        "name": "KOUGO",
        "abbreviation": "KOUGO",
        "filename": "JA-Japanese/kougo.pdf"
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
        "filename": "JV-Javanese/jv_jvn.pdf"
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
        "filename": "KN-Kannada/kn_irv.pdf"
      },
      {
        "id": "kn_kjv",
        "name": "KN_KJV",
        "abbreviation": "KN_KJV",
        "filename": "KN-Kannada/kn_kjv.pdf"
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
        "filename": "KO-Korean/korean.pdf"
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
        "filename": "LV-Latvian/lv_gluck_8.pdf"
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
        "filename": "LT-Lithuanian/lt_heritage.pdf"
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
        "filename": "MI-Maori/maori.pdf"
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
        "filename": "MR-Marathi/mr_irv.pdf"
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
        "filename": "NE-Nepali/ne_ulb.pdf"
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
        "filename": "FA-Persian/opt.pdf"
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
        "filename": "PL-Polish/pol_nbg.pdf"
      },
      {
        "id": "pol_ubg",
        "name": "POL_UBG",
        "abbreviation": "POL_UB",
        "filename": "PL-Polish/pol_ubg.pdf"
      },
      {
        "id": "polbg",
        "name": "POLBG",
        "abbreviation": "POLBG",
        "filename": "PL-Polish/polbg.pdf"
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
        "filename": "PT-Portuguese/almeida_ra.pdf"
      },
      {
        "id": "almeida_rc",
        "name": "ALMEIDA_RC",
        "abbreviation": "ALMEID",
        "filename": "PT-Portuguese/almeida_rc.pdf"
      },
      {
        "id": "blivre",
        "name": "BLIVRE",
        "abbreviation": "BLIVRE",
        "filename": "PT-Portuguese/blivre.pdf"
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
        "filename": "PA-Punjabi_Panjabi/pa_irv.pdf"
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
        "filename": "RO-Romanian/cornilescu.pdf"
      },
      {
        "id": "fidela",
        "name": "FIDELA",
        "abbreviation": "FIDELA",
        "filename": "RO-Romanian/fidela.pdf"
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
        "filename": "RU-Russian/synodal.pdf"
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
        "filename": "SO-Somali/so_jimale.pdf"
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
        "filename": "ES-Spanish/rv_1858.pdf"
      },
      {
        "id": "rv_1909",
        "name": "RV_1909",
        "abbreviation": "RV_190",
        "filename": "ES-Spanish/rv_1909.pdf"
      },
      {
        "id": "rv_1909_strongs",
        "name": "RV_1909_STRONGS",
        "abbreviation": "RV_190",
        "filename": "ES-Spanish/rv_1909_strongs.pdf"
      },
      {
        "id": "rvg",
        "name": "RVG",
        "abbreviation": "RVG",
        "filename": "ES-Spanish/rvg.pdf"
      },
      {
        "id": "rvg_2004",
        "name": "RVG_2004",
        "abbreviation": "RVG_20",
        "filename": "ES-Spanish/rvg_2004.pdf"
      },
      {
        "id": "sagradas",
        "name": "SAGRADAS",
        "abbreviation": "SAGRAD",
        "filename": "ES-Spanish/sagradas.pdf"
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
        "filename": "SW-Swahili/swahili.pdf"
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
        "filename": "TL-Tagalog/tagab.pdf"
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
        "filename": "TG-Tajik/tg_tgk.pdf"
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
        "filename": "TA-Tamil/ta_irv.pdf"
      },
      {
        "id": "ta_oitce",
        "name": "TA_OITCE",
        "abbreviation": "TA_OIT",
        "filename": "TA-Tamil/ta_oitce.pdf"
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
        "filename": "TE-Telugu/te_irv.pdf"
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
        "filename": "TH-Thai/thaikjv.pdf"
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
        "filename": "BO-Tibetan/bo_ntb.pdf"
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
        "filename": "TR-Turkish/turkish.pdf"
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
        "filename": "UG-Uighur,_Uyghur/ug_ara.pdf"
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
        "filename": "UR-Urdu/ur_geo.pdf"
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
        "filename": "VI-Vietnamese/cadman.pdf"
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
        "filename": "WO-Wolof/wo_kyg.pdf"
      },
      {
        "id": "wo_wol_nt_2010",
        "name": "WO_WOL_NT_2010",
        "abbreviation": "WO_WOL",
        "filename": "WO-Wolof/wo_wol_nt_2010.pdf"
      }
    ]
  }
];
