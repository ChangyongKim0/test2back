const convertLandApiData = (data) => {
  let usage_list = [];
  data.LNSD_PRP_DSTRC_NM && typeof data.LNSD_PRP_DSTRC_NM != typeof {}
    ? data.LNSD_PRP_DSTRC_NM.split(",").map((e) => {
        usage_list.push(e.replace(/^ /g, "").replace(/ $/g, ""));
      })
    : {};
  const new_usage_list = Array.from(new Set(usage_list));

  return [
    true,
    {
      area: parseFloat(data.LND_AR),
      usage: data.LND_USE_NM,
      base_ymd_list: [0, 1, 2, 3, 4].map(
        (e) => String(parseInt(data.LNPD_YR) - e) + "." + data.LNPD_MT
      ),
      price_list: [
        parseFloat(data.LNPD_PY0),
        parseFloat(data.LNPD_PY1),
        parseFloat(data.LNPD_PY2),
        parseFloat(data.LNPD_PY3),
        parseFloat(data.LNPD_PY4),
      ],
      usage_list: new_usage_list,
      pos_list: data.LND_SHAPE,
    },
  ];
};

module.exports = convertLandApiData;
