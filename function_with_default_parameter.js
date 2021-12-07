const twoFriends = (name1, name2='Amit')=>{
    // name2 = name2 || 'Amit';
    let sayHello = 'Hello my Friend ' + name1;
    let goodbye = 'Goodbye '+ name2;
    console.log(sayHello + goodbye)
}

twoFriends('Asif');