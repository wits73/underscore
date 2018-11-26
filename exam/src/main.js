export default class Blog {
  constructor() {
    this.setInitVariables();
    this.registerEvents();
    this.likedSet = new Set();
  }

  setInitVariables() {
    this.blogList = document.querySelector(".blogList > ul");
  }

  registerEvents() {
    const startBtn = document.querySelector(".start");
    const dataURL = "/data/data.json";

    startBtn.addEventListener("click", () => {
      this.setInitData(dataURL);
    });

    this.blogList.addEventListener("click", ({ target }) => {
      const targetClassName = target.className;
      const postTitle = target.previousElementSibling.textContent;
      // console.log(targetClassName);
      // if classname is like then add item to my list
      if (targetClassName !== "like" && targetClassName !== "unlike") return;

      //
      if (targetClassName === "unlike") {
        target.className = "like";
        target.innerText = "Item";
        this.likedSet.delete(postTitle);
      } else {
        // add liked list
        this.likedSet.add(postTitle);

        // liked list like to unlike
        target.className = "unlike";
        target.innerText = "Cancel Item";
      }

      this.updateLikedList();
      /*
      this.likedSet.forEach(v => {
        console.log("selected", v);
      });
      */
    });
  }

  updateLikedList() {
    const ul = document.querySelector(".like-list > ul");
    let likedSum = "";
    this.likedSet.forEach(v => {
      likedSum += `<li>${v}</li>`;
    });
    ul.innerHTML = likedSum;
  }

  setInitData(dataURL) {
    this.getData(dataURL, this.insertPosts.bind(this));
  }
  getData(dataURL, fn) {
    const oReq = new XMLHttpRequest();

    oReq.addEventListener("load", () => {
      const list = JSON.parse(oReq.responseText).body;
      fn(list);
    });
    oReq.open("GET", dataURL);
    oReq.send();
  }

  insertPosts(list) {
    //const ul = document.querySelector(".blogList > ul");
    list.forEach(v => {
      // debugger;
      this.blogList.innerHTML += `
      <li>
        <a href=${v.link}>${v.title}</a>
        <div class="like">Item</div>
      </li>
      `;
    });
  }
}

//export default Blog;
