function submit() {
    let ratingOne = document.getElementById("1");
    let ratingTwo = document.getElementById("2");
    let ratingThree = document.getElementById("3");
    let ratingFour = document.getElementById("4");
    let ratingFive = document.getElementById("5");
    const feedback = document.getElementById("feedback")


    if(ratingOne.checked==true) { 
    feedback.innerHTML = `<img src="images/illustration-thank-you.svg"> <p>You selected ${ratingOne.value} of 5 </p> <h1>Thank you! </h1> 
    <p> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>`;
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
