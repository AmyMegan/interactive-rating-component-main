function submit() {
    let ratingOne = document.getElementById("1");
    let ratingTwo = document.getElementById("2");
    let ratingThree = document.getElementById("3");
    let ratingFour = document.getElementById("4");
    let ratingFive = document.getElementById("5");

    if(ratingOne.checked==true)
    console.log(`You selected ${ratingOne.value} of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`);

    else if (ratingTwo.checked==true)
    console.log(`You selected ${ratingTwo.value} of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`);

    if(ratingThree.checked==true)
    console.log(`You selected ${ratingThree.value} of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`);

    else if (ratingFour.checked==true)
    console.log(`You selected ${ratingFour.value} of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`);

    if(ratingFive.checked==true)
    console.log(`You selected ${ratingFive.value} of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`);
}
