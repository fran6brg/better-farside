import numeral from 'numeral'

export const shortenAddress = (address: string) => {
    return `${address.slice(0, 5)}...${address.slice(-5)}`
}
export const shortenStr = (str: string, max = 20) => {
    if (str.length <= max) return str
    return `${str.slice(0, max - 3).trim()}...`
}

export const formatNumberWithDecimals = (numberAsString: string | number, decimals: number, precision = 1) => {
    try {
        if (!decimals || isNaN(decimals)) return 'error parse bigint'
        return numeral(numberAsString)
            .divide(10 ** decimals)
            .format(`0,0.${Array(precision).fill(0).join('')}a`)
    } catch (error) {
        return JSON.stringify(error)
    }
}

export const formatFlows = (flow: number, round = false) => {
    if (Math.abs(flow) > 1000) {
        if (round) return `${numeral(flow).divide(1000).format('0,0')}K`
        return `${numeral(flow).divide(1000).format('0,0.[0]')}K`
    }
    return numeral(flow).format('0,0')
}

export const roundNToXDecimals = (n: number | string, x = 0) => Number(parseFloat(String(n)).toFixed(x))
