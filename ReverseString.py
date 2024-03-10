'''
Write a function that takes in a string and returns the reverse of that string.

For example:

    For the string "hello", the function should return "olleh".
    For the string "world", the function should return "dlrow".

Your task is to implement a function in the programming language of your choice that solves this problem efficiently and correctly.
'''

def reverseString(strToReverse):
	reversedString = ""
	for i in strToReverse[::-1]:
		reversedString += i
	return reversedString

sampleStr = "hello"
print(reverseString(sampleStr))