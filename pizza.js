//создаем глобальный объект с продуктами
const products = [
  {
    title: "ветчина",
    price: 3,
    inCart: 0,
  },
  {
    title: "салями",
    price: 3,
    inCart: 0,
  },
  {
    title: "бекон",
    price: 3,
    inCart: 0,
  },
  {
    title: "грибы",
    price: 3,
    inCart: 0,
  },
  {
    title: "курица",
    price: 3,
    inCart: 0,
  },
  {
    title: "креветки",
    price: 3,
    inCart: 0,
  },
  {
    title: "перец",
    price: 2,
    inCart: 0,
  },
  {
    title: "томаты",
    price: 2,
    inCart: 0,
  },
  {
    title: "оливки",
    price: 2,
    inCart: 0,
  },
  {
    title: "лук",
    price: 2,
    inCart: 0,
  },
  {
    title: "ананасы",
    price: 2,
    inCart: 0,
  },
];

//реалитзовываем SPA
const contentContainer = document.getElementById("content");
const menuContainer = document.getElementById("mainmenu");

const links = {
  constructor: `
    <div class="container">
        <div class="row">
        <div class="constructor_container">
          <div class="left_container">
                 <div class="arrow_block">
                  <img src="project_img/arrow_top.png" />
                 </div>
                  <div class="left_section">
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Ветчина</span> 
                        <input type="text" id="chip" class="chip" disabled />
                    </label>
                    </div>
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Салями</span> 
                        <input type="text" id="chip" class="chip" value="" disabled />
                    </label>
                    </div>
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Бекон</span> 
                        <input type="text" id="chip" class="chip" disabled />
                    </label>
                    </div>
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Грибы</span> 
                        <input type="text" id="chip" class="chip" disabled />
                    </label>
                    </div>
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Курица</span> 
                        <input type="text" id="chip" class="chip" disabled />
                    </label>
                    </div>
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Креветки</span> 
                        <input type="text" id="chip" class="chip" disabled />
                    </label>
                    </div>
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Перец</span> 
                        <input type="text" id="chip" class="chip" disabled />
                    </label>
                    </div>
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Томаты</span> 
                        <input type="text" id="chip" class="chip" disabled />
                    </label>
                    </div>
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Оливки</span> 
                        <input type="text" id="chip" class="chip" disabled />
                    </label>
                    </div>
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Лук</span> 
                        <input type="text" id="chip" class="chip" disabled />
                    </label>
                    </div>
                    <div class="topping_item">
                    <label class="container-custom-checkbox">
                        <input type="checkbox" class="check" />
                        <span>Ананасы</span>
                        <input type="text" id="chip" class="chip" disabled />
                    </label>
                  </div>
             </div> 
                <div class="arrow_block">
                  <img src="project_img/arrow_bottom.png" />
                </div>
         </div>
            
            <div class="center_section">
                <div class="curent_pizza vetchina"></div>
                <div class="curent_pizza salamy"></div>
                <div class="curent_pizza bekon"></div>
                <div class="curent_pizza griby"></div>
                <div class="curent_pizza kurica"></div>
                <div class="curent_pizza krevetky"></div>
                <div class="curent_pizza perec"></div>
                <div class="curent_pizza tomaty"></div>
                <div class="curent_pizza olyvky"></div>
                <div class="curent_pizza luk"></div>
                <div class="curent_pizza ananasy"></div>
            </div>
        </div>
        </div>
    </div>`,
  cart: `
    <div class="container">
      <div class="row">
          <div class="products_container">
          <table >
              <thead>
                  <tr>
                      <th>ИНГРЕДИЕНТЫ</th>
                      <th>ЦЕНА</th> 
                      <th>КОЛИЧЕСТВО</th>
                      <th>СУММА</th>
                  </tr>
              </thead>
              <tbody class="products"></tbody>
          </table>
          <div class="summary"></div>
           <div class="buyBtnCtn">
                   <button class="startCheckout">ЗАКАЗАТЬ</button>
                </div>
            </div>
          <div class="modal-overlay"></div>
            <div class="modal"> 
              <main class="modal__content">
                  <div class="form-field">
                      <input id="input1" class="input__default" type="text" name="name" placeholder="your name:" required>
                  </div>
                  <div class="form-field">
                      <input id="input2" class="input__default" type="text" name="tel" placeholder="telephone:" required>
                  </div>
              </main>
              <footer class="modal__footer">
                  <button class="refuseOrder">Отмена</button>
                  <button class="sendData">Подтвердить</button>
              </footer>
          </div>
      </div>
    </div>`,
  history: `<div class="main_history">
                 <div class="inProcessing"><div>в обработке</div></div>
                 <div class="zone inPreparing"><div class="green">готовы</div></div>
              </div>
              <div class="button-clear"><button class="clearHistory">очистить историю</button></div>
              `,
};

function updateState() {
  let content = links[location.hash.slice(1)];
  contentContainer.innerHTML = content ? content : "<p>Страница не найдена</p>";

  //ПРОПИСЫВАЕМ ОСНОВНУЮ ЛОГИКУ
  const inputs = document.querySelectorAll(".check");
  const productsTitle = document.querySelectorAll(".topping_item");
  const ingredients = document.querySelectorAll(".curent_pizza");
  const addingLinks = document.querySelectorAll(".add_to");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalWindow = document.querySelector(".modal");
  const refuseOrder = document.querySelector(".refuseOrder");
  const makeOrder = document.querySelector(".startCheckout");
  const sendData = document.querySelector(".sendData");
  const inputFirst = document.getElementById("input1");
  const inputSecond = document.getElementById("input2");
  const clearHistoryButton = document.querySelector(".button-clear");

  //берем данные из базы и записываем в историю заказов
  let link = window.location.hash;
  if (link === "#constructor") {
    addChip();
  }
  if (link === "#history") {
    myAppDb.ref("orders").on("value", (res) => {
      const dataOfOrders = res.val();
      let finalDataOfOrders = Object.values(dataOfOrders);
      for (let item of finalDataOfOrders) {
        let inProcess = document.querySelector(".inProcessing");
        inProcess.innerHTML += `<p class="orderFromFirebase" draggable="true">
          <b>Заказчик:</b>${item.personName}. 
          <b>Cостав пиццы:</b>${item.ingredientsList}. 
          <b>Cтоимость заказа:</b>${item.cost}руб. 
          <b>Телефон:</b>${item.telephome}.
          <b>Дата заказа:</b>${item.orderData}</p>`;
      }

      //перетаскиваем готовые заказы
   const dragAndDrop = () => {
   const zone = document.querySelectorAll(".zone");
   const redOr = document.querySelector(".inProcessing");
   let selectedOrder;
   const dragStart = function (event) {
   selectedOrder = event.target;
   if (selectedOrder.tagName != "p") return;
   this.classList.add("hide");
   };

  const dragEnd = function () {
    this.classList.remove("hide");
  };

  const dragOver = function (e) {
    e.preventDefault();
  };

  const dragEnter = function (e) {
    e.preventDefault();
    this.classList.add("hovered");
  };

  const dragLeave = function () {
    this.classList.remove("hovered");
  };

  const dragDrop = function () {
    this.append(selectedOrder);
    this.classList.remove("hovered");
    addSoundBasket();
  };

  zone.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("drop", dragDrop);
  });

    redOr.addEventListener("dragstart", dragStart);
    redOr.addEventListener("dragend", dragEnd);
};
dragAndDrop();

//очищаем историю заказов
function clearHistory() {
    let elements = document.querySelectorAll("p");
    for (let item of elements) {
        item.remove();
    }
      myAppDb.ref("orders").remove();
    }
    clearHistoryButton.addEventListener("click", clearHistory);
  });
}

//пишем функцию по связи чек-боксов, ингредиент-блоков и кнопок
function addIngredints(checkboxes) {
  const nodesArray = Array.from(checkboxes);
  const ingredientsArray = Array.from(ingredients);
  const linksArray = Array.from(addingLinks);
  for (let [index, node] of checkboxes.entries()) {
    node.addEventListener("click", function (e) {
      e.preventDefault();
      const index = nodesArray.indexOf(e.target);
      ingredientsArray[index].classList.add("active");
      cartNumbers(products[index]);
      totalCost(products[index]);
      addSoundBasket();
      addSoundFood();
      addChip();
    });
  }
}
addIngredints(inputs);

function resizable(el, factor) {
  let int = Number(factor) || 7.7;
  function resize() {
    if (el.value.length === 1) {
      el.style.width = (el.value.length + 2) * int + "px";
    }
    if (el.value.length === 2) {
      el.style.width = (el.value.length + 1) * int + "px";
    }
    if (el.value.length === 3) {
      el.style.width = el.value.length * int + "px";
    }

    if (!el.value) {
      el.style.display = "none";
    }
  }
  let e = "keyup,keypress,focus,blur,change".split(",");
  for (let i in e) el.addEventListener(e[i], resize, false);
  resize();
}

function addChip() {
  const products = JSON.parse(localStorage.getItem("productsInCart")) || {};
  const arrayProducts = Object.values(products);

  for (let [index, item] of productsTitle.entries()) {
    for (let titleStorage of arrayProducts) {
      if (
        item.innerText.trim().toLowerCase() ===
        titleStorage.title.trim().toLowerCase()
      ) {
        productsTitle[index].lastElementChild.lastElementChild.style.display =
          "block";

        productsTitle[index].lastElementChild.lastElementChild.value =
          titleStorage.inCart;
      }
    }
    resizable(productsTitle[index].lastElementChild.lastElementChild, 8);
  }
}

//добавляем звуки при клике
function addSoundFood() {
  const audio = new Audio();
  audio.src = "project_sounds/food_sound.mp3";
  audio.autoplay = true;
}
function addSoundBasket() {
  const audio1 = new Audio();
  audio1.src = "project_sounds/add_to_basket.mp3";
  audio1.autoplay = true;
}

//сохраняем данные корзины при перезагрузке страницы
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}
  //вырисовываем количество продуктов в корзине
function cartNumbers(products, action) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (action == "decrease") {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector(".cart span").textContent = productNumbers - 1;
  } else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(products);
}

//сохраняем в локалсторидж список продуктов
function setItems(products) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (
    cartItems !== null ||
    (cartItems && JSON.stringify(cartItems) !== "{}")
  ) {
    if (cartItems[products.title] === undefined) {
    cartItems = {
        ...cartItems,
        [products.title]: products,
      };
    }
    cartItems[products.title].inCart += 1;
  } else {
    products.inCart += 1;
    cartItems = {
      [products.title]: products,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//сохраняем в локалсторидж общую цену
function totalCost(product, action) {
  let cartCost = localStorage.getItem("totalCost");
  if (action == "decrease") {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost - product.price);
  } else if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

//записываем данные из локалсторидж в корзину
function displayCart() {
  makeOrder.disabled = true;
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    makeOrder.disabled = true;
    Object.values(cartItems).map((item) => {
    makeOrder.disabled = false;
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <tr>
            <td>
                <div class="inner_td">
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <span class="ingredient">${item.title}</span>
                </div>
            </td>
            <td>
                <span class="span_price">${item.price}</span>
            </td>
            <td class="inner_td inner_td_center">
                    <ion-icon class="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span>${item.inCart}</span>
                    <ion-icon class="increase" name="arrow-forward-circle-outline"></ion-icon>
            </td>
            <td>
                <span class="common">${item.inCart * item.price} руб.</span>
            </td>
        </tr>`;
    productContainer.appendChild(tr);
   });

   const productCommonCost = document.querySelector(".summary");
   productCommonCost.innerHTML = `<p class="cost">ИТОГО:${cartCost} руб.</p>`;

  }
    deleteButtons();
    manageQuantity();
}

//удаляем сформированные продукты из корзины
function deleteButtons() {
  let deleteButtons = document.querySelectorAll("ion-icon");
  let productName;
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem("totalCost");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, "");
      localStorage.setItem("cartNumbers", productNumbers - cartItems[productName].inCart);
      localStorage.setItem("totalCost", cartCost - cartItems[productName].price * cartItems[productName].inCart);
      products.map((item) => {
        if (item.title === cartItems[productName].title) {
          item.inCart = 0;
        }
      });
      delete cartItems[productName];
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
      onLoadCartNumbers();
    });
  }
}

//меняем количество игредиентов непосредственно в самой корзине
function manageQuantity() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let cartItems = localStorage.getItem("productsInCart");
  let currentQuantity = 0;
  let currentProduct = "";
  cartItems = JSON.parse(cartItems);
  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      currentQuantity = decreaseButtons[i].parentElement.querySelector("span").textContent;
      currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector("span").textContent.toLowerCase().replace(/ /g, "").trim();
      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });
  }
  for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", () => {
      currentQuantity =
        increaseButtons[i].parentElement.querySelector("span").textContent;
      currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector("span").textContent.toLowerCase().replace(/ /g, "").trim();
      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
      });
    }
  }
  onLoadCartNumbers();
  displayCart();

  //открываем и закрываем окно заказа
  makeOrder.addEventListener("click", function (e) {
    e.preventDefault(e);
    modalOverlay.classList.add("block");
    modalWindow.classList.add("block");
    sendData.disabled = true;
    inputFirst.addEventListener("input", checkInputs);
    inputSecond.addEventListener("input", checkInputs);
  });

  refuseOrder.addEventListener("click", function (e) {
    e.preventDefault();
    modalOverlay.classList.remove("block");
    modalWindow.classList.remove("block");
    inputFirst.value = "";
    inputSecond.value = "";
  });

  //проверяем инпуты на введенные данные
  function checkInputs() {
    inputFirst.value && inputSecond.value
      ? (sendData.disabled = false)
      : (sendData.disabled = true);
  }

  //вычисляем то что хранится в локалсторидж и отправляем на сервер
  function sendDataToFirebase() {
    let cartItems = localStorage.getItem("productsInCart");
    let cartCost = localStorage.getItem("totalCost");
    let productContainer = document.querySelector(".products");
    let cart = document.querySelector(".cart span");
    let productCostF = document.querySelector(".summary");
    cartItems = JSON.parse(cartItems);
    let result;
    let resultArray = [];
    Object.values(cartItems).forEach((item) => {
      resultArray.push(item.title);
    });
    result = resultArray.join(", ");
    let data = new Date();
    let options = {day: 'numeric', month: 'long', year: 'numeric'}; 
    let orderData = data.toLocaleDateString('ru', options);
    myAppDb.ref("orders").push({
      personName: inputFirst.value,
      telephome: inputSecond.value,
      ingredientsList: result,
      cost: cartCost,
      orderData: orderData,
    });
    inputFirst.value = "";
    inputSecond.value = "";
    productContainer.innerHTML = "";
    cart.innerText = 0;
    makeOrder.disabled = true;
    productCostF.style.display = "none"; 
    modalOverlay.classList.remove("block");
    modalWindow.classList.remove("block");
    localStorage.clear();
    products.map((item) => (item.inCart = 0));
    alert("Заказ принят, спасибо!");
  }
  sendData.addEventListener("click", sendDataToFirebase);
}

//отрисовываем страницы при смене хэша
window.addEventListener("hashchange", updateState);
window.addEventListener("load", (e) => {
  location.hash.slice(1) ? updateState() : (location.hash = "#constructor");
});

