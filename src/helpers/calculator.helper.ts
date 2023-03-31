export const calculateResultHelper = (data: {
    deals: number,
    revenueGoal: number,
    dealCnvRate: number,
    oppCnvRate: number,
    leadsCnvRate: number,
    months: number
}) => {
    const { deals, revenueGoal, dealCnvRate, oppCnvRate, leadsCnvRate, months } = data;
    let customers = Math.ceil(revenueGoal / deals);
    let opportunities = Math.ceil((customers * 100) / dealCnvRate);
    let meetings = Math.ceil((opportunities * 100) / oppCnvRate);
    let leads = Math.ceil((meetings * 100) / leadsCnvRate);
    let emails = leads * 2;

    customers = getMonthlyData(customers, months)
    opportunities = getMonthlyData(opportunities, months)
    meetings = getMonthlyData(meetings, months)
    leads = getMonthlyData(leads, months)
    emails = getMonthlyData(emails, months)

    return { customers, opportunities, meetings, leads, emails };
}

export const formatNumber = (count: number) => {
    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    var tier = Math.log10(Math.abs(count)) / 3 | 0;
    if (tier === 0) return count;
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = count / scale;
    return scaled.toFixed(1) + suffix;
}

export const getMonthlyData = (target: number, months: number) => {
    let data = Math.ceil(target / months);
    return data;
}

export const isValidInput = (val: any) => {
    let pattern = /^[0-9,]*$/g
    let valid = pattern.test(val)
    return valid;
}

export const addCommaToNumber = (num: any) => {
    let numericVal = num.toString().replace(/[^0-9]/g, "");
    let result = numericVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result;
}

export const formatToNumber = (val: any) => {
    if (typeof val === 'number') return val;
    let result = val.replaceAll(',', '')
    result = Number(result)
    return result;
}

export const getBracketLabel = (key: string, val: string) => {
    if(key === 'opp_deal') return `(avg. is ${val}% go onto close)`;
    else if(key === 'meet_opp') return `(avg. is ${val}% go from meeting to opportunity)`;
    return `(avg. response rate of ${val}%)`;
}