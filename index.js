// //#2
// let username = prompt('Type Your Name')
// console.log({username})
// alert(`Hello ${username}, would you like to learn some Python today?`)

// //#3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let userName = prompt("Type Your Name")
// console.log(userName.toLowerCase())
// console.log(userName.toUpperCase())
// console.log(userName[0].toUpperCase() + (userName.slice(1)).toLocaleLowerCase())

// //#4
// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”')

// //#5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_person = prompt('Your famous person’s name')
// let message = prompt("famous person's message")
// console.log(`${famous_person} once said, "${message}"`)

// //#6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let nameWithSpaces = '       Muhammad\t\nUmair       '
// console.log(nameWithSpaces)

// let trimmedName = (nameWithSpaces.replace(/(' '|\t\n|\n|\t)/gm, "")).trim()
// console.log(trimmedName)


// //#7, #8 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// console.log(5+3)
// console.log(11-3)
// console.log(4*2)
// console.log(16/2)

// //#9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// const favoriteNumber = 7
// const msg = `My favorite number is number ${favoriteNumber}`
// console.log(msg)

// //#10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// //#11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// const names = ['Shayan Ahmed', 'Badi uz Zaman', 'Samair Zia']
// names.map((name)=>console.log(name))

// //#12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// names.map((name)=>console.log('Hi, ' + name))

