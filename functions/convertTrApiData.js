const convertTrApiData = (data) => {
  if (data.transaction_list.length == 0) {
    return {};
  } else {
    const recent = data.transaction_list.slice(-1)[0];
    // console.log(recent.NRG_DL_AM);
    const price = parseInt(recent.NRG_DL_AM.replace(/,/g, "")) * 10000;
    const price_per_area = price / parseFloat(recent.NRG_AR);
    return {
      price: price,
      price_per_area: price_per_area,
      date: recent.NRG_DL_M.slice(0, 4) + "." + recent.NRG_DL_M.slice(4),
    };
  }
};

module.exports = convertTrApiData;
