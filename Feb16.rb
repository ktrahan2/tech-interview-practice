# split the numbers into pairs
# figure out how many times that number repeats
# combine back to one string and repeat
require 'pry'

def lookAndSay(number) 
    if ( number.to_s.length % 2 != 0 ) 
        return number
    end
    ##split the numbers
    numbersSplit = number.to_s.chars.each_slice(2).map(&:join)
    ##read what the numbers say, so loop through and put the 2nd number the 1st number times
    ##do string * number which will return what you want
    ##join the new numbers back together
    newNumber = numbersSplit.map { |number| 
        number[1] * number[0].to_i
    }.join()
    return lookAndSay(newNumber)
    ##keep running this problem until what condition???
end

problem1 = lookAndSay(1211) ## 21, 11, 1
problem2 = lookAndSay(41) ## 11

binding.pry