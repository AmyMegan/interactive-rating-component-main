function submit() {
    let ratingOne = document.getElementById("1");
    let ratingTwo = document.getElementById("2");
    let ratingThree = document.getElementById("3");
    let ratingFour = document.getElementById("4");
    let ratingFive = document.getElementById("5");
    
    const feedback = document.getElementById("container")


    if(ratingOne.checked == true ) { 
    feedback.innerHTML = `You selected ${ratingOne.value} of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
    }
    else if (ratingTwo.checked==true) {
    feedback.innerHTML = `You selected ${ratingTwo.value} of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
    }
    if(ratingThree.checked==true)
    feedback.innerHTML = `You selected ${ratingThree.value} of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;

    else if (ratingFour.checked==true)
    feedback.innerHTML = `You selected ${ratingFour.value} of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;

    if(ratingFive.checked==true)
    feedback.innerHTML = `You selected ${ratingFive.value} of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
}
