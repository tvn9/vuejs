"use strict";

const btnAddEl = document.getElementById("btn-add");
const inputItemEl = document.getElementById("in-item");
const listItemsEl = document.querySelector(".shop-list");

const itemObj = {
  item: "",
}

const shopList = [];

function addItem() {
  itemObj.item = inputItemEl.value;
  shopList.push(itemObj.item);
  console.log(shopList);
  updateUI();
}

function updateUI() {
  const enteredValue = itemObj.item;
  const item = document.createElement("li");
  item.textContent = enteredValue;
  listItemsEl.appendChild(item);
  inputItemEl.value = "";
}

btnAddEl.addEventListener("click", addItem);