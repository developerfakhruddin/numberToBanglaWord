const isValidateNumber = (number) => /^\-?\d*\.?\d*$/.test(number);
const isNegetive = (number) => /^\-/.test(number); // Math.sign()

function numberToBanglaWord(number = 0){
    var number = number;
    // validity check
    if(!isValidateNumber(number)) return "Invalid Number";

    const mappedObj = {
        "নেগেটিভ" : false,
        "কোটি" : 0,
        "লাখ" : 0,
        "হাজার" : 0,
        "শত" : 0,
        "অতিরিক্ত নাম্বার" : 0,
        "দশমিক" : "",
    }

    const zeroTo99 = {
        0 : "শূন্য",
        1 : "এক", 
        2 : "দুই", 
        3 : "তিন", 
        4 : "চার", 
        5 : "পাঁচ", 
        6 : "ছয়", 
        7 : "সাত", 
        8 : "আট", 
        9 : "নয়", 
        10 : "দশ", 
        11 : "এগারো", 
        12 : "বারো", 
        13 : "তেরো", 
        14 : "চৌদ্দ", 
        15 : "পনের", 
        16 : "ষোল", 
        17 : "সতের", 
        18 : "আঠার", 
        19 : "উনিশ", 
        20 : "বিশ", 
        21 : "একুশ", 
        22 : "বাইশ", 
        23 : "তেইশ", 
        24 : "চব্বিশ", 
        25 : "পঁচিশ", 
        26 : "ছাব্বিশ", 
        27 : "সাতাশ", 
        28 : "আটাশ", 
        29 : "ঊনত্রিশ", 
        30 : "ত্রিশ", 
        31 : "একত্রিশ", 
        32 : "বত্রিশ", 
        33 : "তেত্রিশ", 
        34 : "চৌত্রিশ", 
        35 : "পঁয়ত্রিশ", 
        36 : "ছত্রিশ", 
        37 : "সাইত্রিশ", 
        38 : "আটত্রিশ", 
        39 : "ঊনচল্লিশ", 
        40 : "চল্লিশ", 
        41 : "একচল্লিশ", 
        42 : "বিয়াল্লিশ", 
        43 : "তেতাল্লিশ", 
        44 : "চুয়াল্লিশ", 
        45 : "পঁয়তাল্লিশ", 
        46 : "ছিচল্লিশ", 
        47 : "সাতচল্লিশ",
        48 : "আটচল্লিশ", 
        49 : "ঊনপঞ্চাশ", 
        50 : "পঞ্চাশ", 
        51 : "একান্ন", 
        52 : "বাহান্ন", 
        53 : "তেপ্পান্ন", 
        54 : "চুয়ান্ন", 
        55 : "পঞ্চান্ন", 
        56 : "ছাপ্পান্ন", 
        57 : "সাতান্ন", 
        58 : "আটান্ন", 
        59 : "ঊনষাট", 
        60 : "ষাট", 
        61 : "একষট্টি", 
        62 : "বাষট্টি", 
        63 : "তেষট্টি", 
        64 : "চৌষট্টি", 
        65 : "পঁয়ষট্টি", 
        66 : "ছেষট্টি", 
        67 : "সাতষট্টি", 
        68 : "আটষট্টি", 
        69 : "উনসত্তুর", 
        70 : "সত্তর", 
        71 : "একাত্তর", 
        72 : "বাহাত্তর", 
        73 : "তেহাত্তুর", 
        74 : "চুয়াত্তর", 
        75 : "পঁচাত্তর",
        76 : "ছিয়াত্তর", 
        77 : "সাতাত্তর", 
        78 : "আটাত্তর", 
        79 : "ঊনআশি", 
        80 : "আশি", 
        81 : "একাশি", 
        82 : "বিরাশি", 
        83 : "তিরাশি", 
        84 : "চুরাশি", 
        85 : "পঁচাশি", 
        86 : "ছিয়াশি", 
        87 : "সাতাশি", 
        88 : "আটাশি", 
        89 : "উননব্বই", 
        90 : "নব্বই", 
        91 : "একানব্বই", 
        92 : "বিরানব্বই", 
        93 : "তিরানব্বই", 
        94 : "চুরানব্বই", 
        95 : "পঁচানব্বই", 
        96 : "ছিয়ানব্বই", 
        97 : "সাতানব্বই", 
        98 : "আটানব্বই", 
        99 : "নিরানব্বই", 
        100 : "একশ",
    }

    //negetivity check
    if(isNegetive(number)) {
        mappedObj["নেগেটিভ"] = true;
        number = Math.abs(number)
    }

    let stringOfNumber = number.toString()

    if(stringOfNumber.includes('.')){
        var [int, float] = stringOfNumber.split('.')
        for (num of float){
            mappedObj["দশমিক"] = mappedObj["দশমিক"]  + zeroTo99[num] + " "
        }
        stringOfNumber = int;
    }
    
    if(stringOfNumber.length > 7){
        mappedObj["কোটি"] = zeroTo99[Math.floor(Number(int) / 10000000)]
        stringOfNumber = (Number(stringOfNumber) % 10000000).toString()
    }

    if(stringOfNumber.length > 5){
        mappedObj["লাখ"] = zeroTo99[Math.floor(Number(stringOfNumber) / 100000)]
        stringOfNumber = (Number(stringOfNumber) % 100000).toString()
    }

    if(stringOfNumber.length > 3){
        mappedObj["হাজার"] = zeroTo99[Math.floor(Number(stringOfNumber) / 1000)]
        stringOfNumber = (Number(stringOfNumber) % 1000).toString()
    }

    if(stringOfNumber.length > 2){
        mappedObj["শত"] = zeroTo99[Math.floor(Number(stringOfNumber) / 100)]
        stringOfNumber = (Number(stringOfNumber) % 100).toString()
    }

    stringOfNumber = Number(stringOfNumber) 
    if(stringOfNumber) mappedObj["অতিরিক্ত নাম্বার"] = zeroTo99[stringOfNumber]
    
    return objectToOutput(mappedObj)
}

function objectToOutput(obj){
    let output = ''
    if(obj["নেগেটিভ"]) output += "নেগেটিভ "
    if(obj["কোটি"]) output += obj["কোটি"] + " কোটি "
    if(obj["লাখ"]) output += obj["লাখ"] + " লাখ "
    if(obj["হাজার"]) output += obj["হাজার"] + " হাজার "
    if(obj["শত"]) output += obj["শত"] + "শত "
    if(obj["অতিরিক্ত নাম্বার"]) output += obj["অতিরিক্ত নাম্বার"] + " "
    if(obj["দশমিক"]) output += "দশমিক " + obj["দশমিক"]
    return output.trim()
}


numberToBanglaWord(-87) // নেগেটিভ সাতাশি
numberToBanglaWord(500.05) // পাঁচশত দশমিক শূন্য পাঁচ
numberToBanglaWord(5415) // পাঁচ হাজার চার শত পনের
