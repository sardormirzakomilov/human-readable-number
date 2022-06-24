module.exports = function toReadable(number) {
    let myArr = String(number).split("").map((num) => {
        return Number(num)
    })

    let string = ''
    let str = string.split('')

    for (let i = myArr.length - 1; i >= 0; i--) {
        if (+myArr.length === 1 && +myArr[i] === 0) {
            str.push('zero')
        }
        if (i == myArr.length - 1) {

            if (+myArr[i] === 1) {
                str.push('one')
            } else if (+myArr[i] === 2) {
                str.push('two')
            } else if (+myArr[i] === 3) {
                str.push('three')
            } else if (+myArr[i] === 4) {
                str.push('four')
            } else if (+myArr[i] === 5) {
                str.push('five')
            } else if (+myArr[i] === 6) {
                str.push('six')
            } else if (+myArr[i] === 7) {
                str.push('seven')
            } else if (+myArr[i] === 8) {
                str.push('eight')
            } else if (+myArr[i] === 9) {
                str.push('nine')
            }

        }

        if (i === myArr.length - 2) {
            if (+myArr[i] === 1) {
                if (+myArr[i + 1] === 1) {
                    str.pop()
                    str.push('eleven')
                } else if (+myArr[i + 1] === 0) {
                    str.pop()
                    str.push('ten')
                }
                else if (+myArr[i + 1] === 2) {
                    str.pop()
                    str.push('twelve')
                } else if (+myArr[i + 1] === 3) {
                    str.pop()
                    str.push('thirteen')
                } else if (+myArr[i + 1] === 4) {
                    str.pop()
                    str.push('fourteen')
                } else if (+myArr[i + 1] === 5) {
                    str.pop()
                    str.push('fifteen')
                } else if (+myArr[i + 1] === 6) {
                    str.pop()
                    str.push('sixteen')
                } else if (+myArr[i + 1] === 7) {
                    str.pop()
                    str.push('seventeen')
                } else if (+myArr[i + 1] === 8) {
                    str.pop()
                    str.push('eighteen')
                } else if (+myArr[i + 1] === 9) {
                    str.pop()
                    str.push('nineteen')
                }
            } else if (+myArr[i] === 2) {
                str.unshift('twenty')
            } else if (+myArr[i] === 3) {
                str.unshift('thirty')
            } else if (+myArr[i] === 4) {
                str.unshift('forty')
            } else if (+myArr[i] === 5) {
                str.unshift('fifty')
            } else if (+myArr[i] === 6) {
                str.unshift('sixty')
            } else if (+myArr[i] === 7) {
                str.unshift('seventy')
            } else if (+myArr[i] === 8) {
                str.unshift('eighty')
            } else if (+myArr[i] === 9) {
                str.unshift('ninety')
            }
        }

        if (i === myArr.length - 3) {
            if (+myArr[i] === 1) {
                str.unshift('one hundred')
            } else if (+myArr[i] === 2) {
                str.unshift('two hundred')
            } else if (+myArr[i] === 3) {
                str.unshift('three hundred')
            } else if (+myArr[i] === 4) {
                str.unshift('four hundred')
            } else if (+myArr[i] === 5) {
                str.unshift('five hundred')
            } else if (+myArr[i] === 6) {
                str.unshift('six hundred')
            } else if (+myArr[i] === 7) {
                str.unshift('seven hundred')
            } else if (+myArr[i] === 8) {
                str.unshift('eight hundred')
            } else if (+myArr[i] === 9) {
                str.unshift('nine hundred')
            }
        }
    }
    return str.join(' ')
}
