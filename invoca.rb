require 'pry'

## input "228" and "cat", matching strings are cat
## input "2283" and "cat", matching strings are catd, cate, catf
## input "18003569377" and "flower", returns flowerp, flowerq, flowerr, flowers

##first I need to find where the word is in the number.
##could transform all letters into numbers

class VanityPhoneNumber

    digit_to_letter_hash = {
        "2": ["a","b","c"],
        "3": ["d","e","f"],
        "4": ["g","h","i"],
        "5": ["j","k","l"],
        "6": ["m","n","o"],
        "7": ["p","q","r","s"],
        "8": ["t","u","v"],
        "9": ["w","x","y","z"]
    }

    digit_to_letter_hash

binding.pry

end