window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((booksArr) => {
      //   console.log(booksArr);
      booksArr.forEach((element) => {
        // console.log("prova");
        const row = document.getElementById("row");
        const col = document.createElement("div");
        const card = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardBody = document.createElement("div");
        const cardTitle = document.createElement("h5");
        const cardText = document.createElement("p");
        col.className = "col";
        card.className = "card";
        cardImg.className = "card-img-top";
        cardImg.src = element.img;
        cardBody.className = "card-body";
        cardTitle.className = "card-title";
        cardTitle.innerText = element.title;
        cardText.className = "card-text";
        cardText.innerText = "Price: " + element.price + "£";

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardImg);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });
    });
};
