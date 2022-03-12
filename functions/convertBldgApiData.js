const fs = require("fs");

const sigungu_code = JSON.parse(
  fs.readFileSync(
    "/home/CY/Database/background_algorithms/configs/sigungu_code.json"
  )
);

const naked_data = {
  id: "1168010100108310048",
  service_name: "GBD",
  bldg_list: [
    {
      id: "11680-786",
      floor_list: [
        {
          id: "202",
          room_list: [
            {
              id: "40640",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "2.0",
              BLFD_FL_NO_NM: "2층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "04001",
              BLFD_PR_MN_NM: "일반음식점",
              BLFD_PR_ETC: "제2종근린생활시설(일반음식점)",
              BLFD_FL_AR: "92.73",
              BLFD_FL_YN: "0",
              BLFD_DT_CR: "20210712",
            },
            {
              id: "40647",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "2.0",
              BLFD_FL_NO_NM: "2층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "14204",
              BLFD_PR_MN_NM: "사무소",
              BLFD_PR_ETC: "사무실",
              BLFD_FL_AR: "97.24",
              BLFD_FL_YN: "0",
              BLFD_DT_CR: "20210712",
            },
          ],
        },
        {
          id: "101",
          room_list: [
            {
              id: "40641",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "10",
              BLFD_FL_GB_NM: "지하",
              BLFD_FL_NO: "1.0",
              BLFD_FL_NO_NM: "지하1층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "04001",
              BLFD_PR_MN_NM: "일반음식점",
              BLFD_PR_ETC: "대중음식점",
              BLFD_FL_AR: "129.68",
              BLFD_FL_YN: null,
              BLFD_DT_CR: "20210712",
            },
            {
              id: "40642",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "10",
              BLFD_FL_GB_NM: "지하",
              BLFD_FL_NO: "1.0",
              BLFD_FL_NO_NM: "지하1층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "14299",
              BLFD_PR_MN_NM: "기타일반업무시설",
              BLFD_PR_ETC: "계단실",
              BLFD_FL_AR: "14.11",
              BLFD_FL_YN: null,
              BLFD_DT_CR: "20210712",
            },
            {
              id: "40643",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "10",
              BLFD_FL_GB_NM: "지하",
              BLFD_FL_NO: "1.0",
              BLFD_FL_NO_NM: "지하1층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "14299",
              BLFD_PR_MN_NM: "기타일반업무시설",
              BLFD_PR_ETC: "기계전기실",
              BLFD_FL_AR: "29.24",
              BLFD_FL_YN: null,
              BLFD_DT_CR: "20210712",
            },
          ],
        },
        {
          id: "201",
          room_list: [
            {
              id: "40644",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "1.0",
              BLFD_FL_NO_NM: "1층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "03001",
              BLFD_PR_MN_NM: "소매점",
              BLFD_PR_ETC: "점포",
              BLFD_FL_AR: "132.49",
              BLFD_FL_YN: null,
              BLFD_DT_CR: "20210712",
            },
            {
              id: "40645",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "1.0",
              BLFD_FL_NO_NM: "1층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "14299",
              BLFD_PR_MN_NM: "기타일반업무시설",
              BLFD_PR_ETC: "계단실통로",
              BLFD_FL_AR: "14.56",
              BLFD_FL_YN: null,
              BLFD_DT_CR: "20210712",
            },
            {
              id: "40646",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "1.0",
              BLFD_FL_NO_NM: "1층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "14299",
              BLFD_PR_MN_NM: "기타일반업무시설",
              BLFD_PR_ETC: "화장실,계단실",
              BLFD_FL_AR: "22.4",
              BLFD_FL_YN: null,
              BLFD_DT_CR: "20210712",
            },
          ],
        },
        {
          id: "203",
          room_list: [
            {
              id: "40648",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "3.0",
              BLFD_FL_NO_NM: "3층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "15003",
              BLFD_PR_MN_NM: "다중생활시설",
              BLFD_PR_ETC: "숙박시설(다중생활시설)",
              BLFD_FL_AR: "189.97",
              BLFD_FL_YN: "0",
              BLFD_DT_CR: "20210712",
            },
          ],
        },
        {
          id: "204",
          room_list: [
            {
              id: "40649",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "4.0",
              BLFD_FL_NO_NM: "4층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "15003",
              BLFD_PR_MN_NM: "다중생활시설",
              BLFD_PR_ETC: "숙박시설(다중생활시설)",
              BLFD_FL_AR: "189.97",
              BLFD_FL_YN: "0",
              BLFD_DT_CR: "20210712",
            },
          ],
        },
        {
          id: "205",
          room_list: [
            {
              id: "40650",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "5.0",
              BLFD_FL_NO_NM: "5층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "15003",
              BLFD_PR_MN_NM: "다중생활시설",
              BLFD_PR_ETC: "숙박시설(다중생활시설)",
              BLFD_FL_AR: "50",
              BLFD_FL_YN: "0",
              BLFD_DT_CR: "20210712",
            },
            {
              id: "40651",
              BLFD_IDNTF: "11680-786",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "5.0",
              BLFD_FL_NO_NM: "5층",
              BLFD_STR_CD: "32",
              BLFD_STR_NM: "경량철골구조",
              BLFD_STR_ETC: "경량철골조",
              BLFD_PR_MN: "15003",
              BLFD_PR_MN_NM: "다중생활시설",
              BLFD_PR_ETC: "숙박시설(다중생활시설)",
              BLFD_FL_AR: "30.51",
              BLFD_FL_YN: "0",
              BLFD_DT_CR: "20210712",
            },
          ],
        },
      ],
      BLRD_IDNTF: "11680-786",
      BLRD_PRPS_MJ: "15000",
      BLRD_PRPS_MJ_NM: "숙박시설",
      BLRD_PRPS_ETC_NM: "숙박시설,근린생활시설",
      BLRD_RF: "10",
      BLRD_RF_NM: "(철근)콘크리트",
      BLRD_RF_ETC: "슬라브",
      BLRD_HHLD: "0",
      BLRD_FMLY: "0",
      BLRD_HO: "0",
      BLRD_HG: "0",
      BLRD_FL_GR: "5",
      BLRD_FL_UGR: "1",
      BLRD_EL_USE: "0",
      BLRD_EL_EME: "0",
      BLRD_Atch_BLD: "0",
      BLRD_Atch_AR: "0",
      BLRD_TOT_AR: "992.9",
      BLRD_PR_MC_IN: "0",
      BLRD_PR_MC_IN_AR: "0",
      BLRD_PR_MC_OT: "0",
      BLRD_PR_MC_OT_AR: "0",
      BLRD_PR_AT_IN: "0",
      BLRD_PR_AT_IN_AR: "0",
      BLRD_DT_PMS: "19860116",
      BLRD_DT_STC: null,
      BLRD_DT_APR: "19870123",
      BLRD_EN_GR: null,
      BLRD_EN_RT: "0",
      BLRD_EN_EPI: "0",
      BLRD_GN_GR: null,
      BLRD_GN_CRT: "0",
      BLRD_IT_GR: null,
      BLRD_IT_CRT: "0",
      BLRD_DT_CRTN: "20210712",
      BLRD_PLC: "서울특별시 강남구 역삼동 831-48번지",
      BLRD_PNU_SGG: "11680",
      BLRD_PNU_BJD: "10100",
      BLRD_PNU_GB: "0",
      BLRD_PNU_BUN: "0831",
      BLRD_PNU_JI: "0048",
      BLRD_RG_CD: "1",
      BLRD_RG_CD_NM: "일반",
      BLRD_RG_KN_CD: "2",
      BLRD_RG_KN_CD_NM: "일반건축물",
      BLRD_NM: null,
      BLRD_DNM: "제2호",
      BLRD_PLC_N: "서울특별시 강남구 역삼로1길 14",
      BLRD_SPL_N: null,
      BLRD_LOT_CNT: "0",
      BLRD_RD_CD: "116804166638",
      BLRD_RD_BJD: "10101",
      BLRD_RD_UGR: "0",
      BLRD_RD_MB: "14.0",
      BLRD_RD_SB: "0.0",
      BLRD_Atch_CD: "0",
      BLRD_Atch_CD_NM: "주건축물",
      BLRD_PL_AR: "764.3",
      BLRD_ARC_AR: "189.97",
      BLRD_BC_RAT: "0",
      BLRD_TOTA_AR: "992.9",
      BLRD_TOTA_FL_AR: "819.87",
      BLRD_FL_RAT: "0",
      BLRD_STR_CD: "21",
      BLRD_STR_ETC: "철근콘크리트조",
      BLRD_QK_YN: "0",
      BLRD_QK_AB: null,
    },
    {
      id: "11680-787",
      floor_list: [
        {
          id: "202",
          room_list: [
            {
              id: "40652",
              BLFD_IDNTF: "11680-787",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "2.0",
              BLFD_FL_NO_NM: "2층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "15003",
              BLFD_PR_MN_NM: "다중생활시설",
              BLFD_PR_ETC: "숙박시설(다중생활시설)",
              BLFD_FL_AR: "181.91",
              BLFD_FL_YN: "0",
              BLFD_DT_CR: "20210712",
            },
          ],
        },
        {
          id: "201",
          room_list: [
            {
              id: "40653",
              BLFD_IDNTF: "11680-787",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "1.0",
              BLFD_FL_NO_NM: "1층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "04999",
              BLFD_PR_MN_NM: "기타제2종근린생활시설",
              BLFD_PR_ETC: "화장실,계단실통로",
              BLFD_FL_AR: "39.79",
              BLFD_FL_YN: null,
              BLFD_DT_CR: "20210712",
            },
            {
              id: "40655",
              BLFD_IDNTF: "11680-787",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "1.0",
              BLFD_FL_NO_NM: "1층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "03999",
              BLFD_PR_MN_NM: "기타제1종근린생활시설",
              BLFD_PR_ETC: "제1종근린생활시설",
              BLFD_FL_AR: "142.12",
              BLFD_FL_YN: null,
              BLFD_DT_CR: "20210712",
            },
            {
              id: "40657",
              BLFD_IDNTF: "11680-787",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "1.0",
              BLFD_FL_NO_NM: "1층",
              BLFD_STR_CD: "32",
              BLFD_STR_NM: "경량철골구조",
              BLFD_STR_ETC: "경량철골조",
              BLFD_PR_MN: "04999",
              BLFD_PR_MN_NM: "기타제2종근린생활시설",
              BLFD_PR_ETC: "통로",
              BLFD_FL_AR: "9.92",
              BLFD_FL_YN: null,
              BLFD_DT_CR: "20210712",
            },
          ],
        },
        {
          id: "101",
          room_list: [
            {
              id: "40654",
              BLFD_IDNTF: "11680-787",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "10",
              BLFD_FL_GB_NM: "지하",
              BLFD_FL_NO: "1.0",
              BLFD_FL_NO_NM: "지하1층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "16999",
              BLFD_PR_MN_NM: "기타위락시설",
              BLFD_PR_ETC: "위락시설",
              BLFD_FL_AR: "272.37",
              BLFD_FL_YN: null,
              BLFD_DT_CR: "20210712",
            },
          ],
        },
        {
          id: "205",
          room_list: [
            {
              id: "40656",
              BLFD_IDNTF: "11680-787",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "5.0",
              BLFD_FL_NO_NM: "5층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "15003",
              BLFD_PR_MN_NM: "다중생활시설",
              BLFD_PR_ETC: "숙박시설(다중생활시설)",
              BLFD_FL_AR: "50",
              BLFD_FL_YN: "0",
              BLFD_DT_CR: "20210712",
            },
          ],
        },
        {
          id: "203",
          room_list: [
            {
              id: "40658",
              BLFD_IDNTF: "11680-787",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "3.0",
              BLFD_FL_NO_NM: "3층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "15003",
              BLFD_PR_MN_NM: "다중생활시설",
              BLFD_PR_ETC: "숙박시설(다중생활시설)",
              BLFD_FL_AR: "181.91",
              BLFD_FL_YN: "0",
              BLFD_DT_CR: "20210712",
            },
          ],
        },
        {
          id: "204",
          room_list: [
            {
              id: "40659",
              BLFD_IDNTF: "11680-787",
              BLFD_PLC: "서울특별시 강남구 역삼동 831-48번지",
              BLFD_PNU_SGG: "11680",
              BLFD_PNU_BJD: "10100",
              BLFD_PNU_GB: "0",
              BLFD_PNU_BUN: "0831",
              BLFD_PNU_JI: "0048",
              BLFD_FL_GB: "20",
              BLFD_FL_GB_NM: "지상",
              BLFD_FL_NO: "4.0",
              BLFD_FL_NO_NM: "4층",
              BLFD_STR_CD: "21",
              BLFD_STR_NM: "철근콘크리트구조",
              BLFD_STR_ETC: "철근콘크리트조",
              BLFD_PR_MN: "15003",
              BLFD_PR_MN_NM: "다중생활시설",
              BLFD_PR_ETC: "숙박시설(다중생활시설)",
              BLFD_FL_AR: "181.91",
              BLFD_FL_YN: "0",
              BLFD_DT_CR: "20210712",
            },
          ],
        },
      ],
      BLRD_IDNTF: "11680-787",
      BLRD_PRPS_MJ: "15000",
      BLRD_PRPS_MJ_NM: "숙박시설",
      BLRD_PRPS_ETC_NM: "숙박시설,근린생활시설",
      BLRD_RF: "10",
      BLRD_RF_NM: "(철근)콘크리트",
      BLRD_RF_ETC: "슬라브",
      BLRD_HHLD: "0",
      BLRD_FMLY: "0",
      BLRD_HO: "0",
      BLRD_HG: "0",
      BLRD_FL_GR: "5",
      BLRD_FL_UGR: "1",
      BLRD_EL_USE: "0",
      BLRD_EL_EME: "0",
      BLRD_Atch_BLD: "0",
      BLRD_Atch_AR: "0",
      BLRD_TOT_AR: "1059.93",
      BLRD_PR_MC_IN: "0",
      BLRD_PR_MC_IN_AR: "0",
      BLRD_PR_MC_OT: "0",
      BLRD_PR_MC_OT_AR: "0",
      BLRD_PR_AT_IN: "0",
      BLRD_PR_AT_IN_AR: "0",
      BLRD_DT_PMS: "19860116",
      BLRD_DT_STC: null,
      BLRD_DT_APR: "19870123",
      BLRD_EN_GR: null,
      BLRD_EN_RT: "0",
      BLRD_EN_EPI: "0",
      BLRD_GN_GR: null,
      BLRD_GN_CRT: "0",
      BLRD_IT_GR: null,
      BLRD_IT_CRT: "0",
      BLRD_DT_CRTN: "20210712",
      BLRD_PLC: "서울특별시 강남구 역삼동 831-48번지",
      BLRD_PNU_SGG: "11680",
      BLRD_PNU_BJD: "10100",
      BLRD_PNU_GB: "0",
      BLRD_PNU_BUN: "0831",
      BLRD_PNU_JI: "0048",
      BLRD_RG_CD: "1",
      BLRD_RG_CD_NM: "일반",
      BLRD_RG_KN_CD: "2",
      BLRD_RG_KN_CD_NM: "일반건축물",
      BLRD_NM: null,
      BLRD_DNM: "제1호",
      BLRD_PLC_N: "서울특별시 강남구 역삼로1길 14",
      BLRD_SPL_N: null,
      BLRD_LOT_CNT: "0",
      BLRD_RD_CD: "116804166638",
      BLRD_RD_BJD: "10101",
      BLRD_RD_UGR: "0",
      BLRD_RD_MB: "14.0",
      BLRD_RD_SB: "0.0",
      BLRD_Atch_CD: "0",
      BLRD_Atch_CD_NM: "주건축물",
      BLRD_PL_AR: "764.3",
      BLRD_ARC_AR: "191.83",
      BLRD_BC_RAT: "0",
      BLRD_TOTA_AR: "1059.93",
      BLRD_TOTA_FL_AR: "787.56",
      BLRD_FL_RAT: "0",
      BLRD_STR_CD: "21",
      BLRD_STR_ETC: "철근콘크리트조",
      BLRD_QK_YN: "0",
      BLRD_QK_AB: null,
    },
  ],
  attach_pnu_list: [],
  BLTD_IDNTF: "11680-72",
  BLTD_PRPS_MJ: "15000",
  BLTD_PRPS_MJ_NM: "숙박시설",
  BLTD_PRPS_ETC_NM: "숙박시설,근린생활시설",
  BLTD_HHLD: "0",
  BLTD_FMLY: "0",
  BLTD_HO: "0",
  BLTD_MN_BLD: "2",
  BLTD_Atch_BLD: "0",
  BLTD_Atch_AR: "0",
  BLTD_PR_TOT: "0",
  BLTD_PR_MC_IN: "0",
  BLTD_PR_MC_IN_AR: "0",
  BLTD_PR_MC_OT: "0",
  BLTD_PR_MC_OT_AR: "0",
  BLTD_PR_AT_IN: "0",
  BLTD_PR_AT_IN_AR: "0",
  BLTD_DT_PMS: null,
  BLTD_DT_STC: null,
  BLTD_DT_APR: null,
  BLTD_EN_GR: null,
  BLTD_EN_RT: "0",
  BLTD_EN_EPI: "0",
  BLTD_GN_GR: null,
  BLTD_GN_CRT: "0",
  BLTD_IT_GR: null,
  BLTD_IT_CRT: "0",
  BLTD_DT_CRTN: "20171118",
  BLTD_PLC: "서울특별시 강남구 역삼동 831-48번지",
  BLTD_PNU_SGG: "11680",
  BLTD_PNU_BJD: "10100",
  BLTD_PNU_GB: "0",
  BLTD_PNU_BUN: "0831",
  BLTD_PNU_JI: "0048",
  BLTD_RG_CD: "1",
  BLTD_RG_CD_NM: "일반",
  BLTD_RG_KN_CD: "1",
  BLTD_RG_KN_CD_NM: "총괄표제부",
  BLTD_NM: null,
  BLTD_PLC_N: "서울특별시 강남구 역삼로1길 14",
  BLTD_SPL_N: null,
  BLTD_LOT_CNT: "0",
  BLTD_RD_CD: "116804166638",
  BLTD_RD_BJD: "10101",
  BLTD_RD_UGR: "0",
  BLTD_RD_MB: "14.0",
  BLTD_RD_SB: "0.0",
  BLTD_PL_AR: "764.3",
  BLTD_ARC_AR: "381.8",
  BLTD_BC_RAT: "49.95",
  BLTD_TOTA_AR: "2052.83",
  BLTD_TOTA_FL_AR: "1067.43",
  BLTD_FL_RAT: "139.66",
  BLTD_NO_CD: "1",
  BLTD_NO_NM: "신대장",
  BLYD_SHAPE:
    "127.0307648 37.49423818 127.03070301 37.49436687 127.03061625 37.4943424 127.03062225 37.49432747 127.03059008 37.49431847 127.03064729 37.49420302 127.0307648 37.49423818",
  BLYD_GIS_IDNTFC: "1987202643064435648800000000",
  BLYD_AG_SE: "1168010100108310048",
  BLYD_IDNTFC: "787",
  BLYD_SE: "1",
  BLYD_KND: "2",
  BLYD_NM: -1,
  BLYD_DNM: "제1호",
  BLYD_TOTAR: "1059.93",
  BLYD_GFL: "1",
  BLYD_STD_DT: "2021-01-13Z",
};

const _createBldgName = (e) => {
  if (e.BLRD_NM) {
    if (e.BLRD_DNM) {
      return e.BLRD_NM + " - " + e.BLRD_DNM;
    } else {
      return e.BLRD_NM;
    }
  } else if (e.BLRD_DNM) {
    return e.BLRD_DNM;
  }
  return "";
};

const _rooftop_name = "옥탑";

const _getFloor = (e2) => {
  switch (e2.BLFD_FL_GB) {
    case "10":
      return 1 - parseInt(e2.BLFD_FL_NO);
    case "20":
      return parseInt(e2.BLFD_FL_NO);
    case "30":
      return _rooftop_name;
  }
};

const _compareFloor = (a, b) => {
  if (a == _rooftop_name) {
    if (b == _rooftop_name) {
      return 0;
    } else {
      return 1;
    }
  } else if (b == _rooftop_name) {
    return -1;
  } else {
    return a - b;
  }
};

const convertBldgApiData = (data) => {
  let input = {};
  let bldg_title_list = [];
  let bldg_info_list = [];
  if (data.bldg_list.length == 1) {
    bldg_title_list = [
      { title: "건물", base: _createBldgName(data.bldg_list[0]), idx: 0 },
    ];
  } else {
    data.bldg_list.map((e, idx) => {
      bldg_title_list.push({
        title: "건물" + (idx + 1),
        base: _createBldgName(e),
        idx: idx,
      });
    });
  }
  data.bldg_list.map((e) => {
    let bldg_info = {};
    bldg_info.road_addr = e.BLRD_PLC_N;
    bldg_info.farea = parseInt(e.BLRD_TOTA_AR);
    bldg_info.far = parseFloat(e.BLRD_TOTA_FL_AR) / parseFloat(e.BLRD_PL_AR);
    bldg_info.bcr = parseFloat(e.BLRD_ARC_AR) / parseFloat(e.BLRD_PL_AR);
    bldg_info.const_year =
      data.BLRD_DT_PMS == null ? "-" : data.BLRD_DT_PMS.slice(0, 4);
    bldg_info.size = [1 - parseInt(e.BLRD_FL_UGR), parseInt(e.BLRD_FL_GR)];
    bldg_info.par = "-";
    let usage_list = [e.BLRD_PRPS_MJ_NM];
    e.BLRD_PRPS_ETC_NM
      ? e.BLRD_PRPS_ETC_NM.split(",").map((e2) => {
          usage_list.push(e2.replace(/^ /g, "").replace(/ $/g, ""));
        })
      : {};
    bldg_info.usage_list = Array.from(new Set(usage_list));
    let bldg_detail = [];
    e.floor_list.map((e2) => {
      e2.room_list.map((e3) => {
        const floor = _getFloor(e3);
        const usage =
          e3.BLFD_PR_MN_NM.replace(",", ", ") +
          ", " +
          (e3.BLFD_PR_ETC ? e3.BLFD_PR_ETC.replace(",", ", ") : "");
        const area = parseInt(e3.BLFD_FL_AR);
        bldg_detail.push({ floor: floor, usage: usage, area: area });
      });
    });
    bldg_info.detail = bldg_detail.sort((a, b) =>
      _compareFloor(b.floor, a.floor)
    );
    bldg_info_list.push(bldg_info);
  });
  input.bldg_title_list = bldg_title_list;
  input.bldg_info_list = bldg_info_list;

  const att = data.attach_pnu_list;
  input.attach_pnu_list = att.map((e) => {
    return {
      addr: _getAddrFromPnu(e.id),
      area: 0,
    };
  });
  return [data.bldg_list.length != 0, input];
};

const _getAddrFromPnu = (pnu) => {
  return (
    sigungu_code.from_code[pnu.slice(0, 10)] +
    " " +
    pnu.slice(11, 15).replace(/^0+/, "") +
    (pnu.slice(15) == "0000" ? "" : "-" + pnu.slice(15).replace(/^0+/, ""))
  );
};

// console.log(convertBldgApiData(naked_data));

// while (true) {}

module.exports = convertBldgApiData;
