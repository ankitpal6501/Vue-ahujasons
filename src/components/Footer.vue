<template>
  <div class="footer">
    <div class="topfooter">
      <img src="https://ahujasons.com/images/ahuja/smallLogo.png" alt="" />
    </div>
    <div class="bottomfooter">
      <div class="shop">
        <ul>
          <h3>SHOP</h3>
          <li><a href="#">Men</a></li>
          <li><a href="#">Woman</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sale</a></li>
          <li><a href="#">Collection</a></li>
        </ul>
      </div>
      <div class="quicklinks">
        <ul>
          <h3>QUICK LINKS</h3>
          <li><a href="#">Ahujasons Export</a></li>
          <li><a href="#">Ahujasons Wholesale</a></li>
          <li><a href="#">Our Storyome</a></li>
          <li><a href="#">Legacy</a></li>
          <li><a href="#">Craftsman ship</a></li>
          <li><a href="#">Our Store</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </div>
      <div class="customerservice">
        <ul>
          <h3>CUSTOMER SERVICE</h3>
          <li><a href="#">Terms and Condition</a></li>
          <li><a href="#">Shipping & Delivery</a></li>
          <li><a href="#">Returns & Cancellation</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Store appointment</a></li>
        </ul>
      </div>
      <div class="myprofile">
        <ul>
          <h3>MY PROFILE</h3>
          <li><a href="#">My Account</a></li>
          <li><a href="#">Track Order</a></li>
          <li><a href="#">My Cart</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Order History</a></li>
        </ul>
      </div>
      <div class="signup">
        <h3>SIGN UP AND SAVE</h3>
        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
        <div class="input1">
          <input type="email" name="email" placeholder="Enter your eamil" />
          <label for="eamil">Subscribe</label>
        </div>
        <h4>GIVE US A FOLLOW</h4>
        <div class="icon">
          <img src="../assets/facebook.svg" alt="" />
          <img src="	https://ahujasons.com/images/ahuja/twitter.svg" alt="" />
          <img src="	https://ahujasons.com/images/ahuja/linkedin.svg" alt="" />
          <img src="	https://ahujasons.com/images/ahuja/pinterest.svg" alt="" />
          <img src="https://ahujasons.com/images/ahuja/youtube.svg" alt="" />
        </div>
        <p id="copyright">
          Copyright © 2021 by Ahujasons I Powered by GreenHonchos
        </p>
      </div>
    </div>

    <!-- mobile Footer -->
    <div id="mobile-footer">
      <div class="signup">
        <h4>GIVE US A FOLLOW</h4>
        <div class="icon">
          <img src="	https://ahujasons.com/images/ahuja/facebook.svg" alt="" />
          <img src="	https://ahujasons.com/images/ahuja/instagram.svg" alt="" />
          <img src="	https://ahujasons.com/images/ahuja/twitter.svg" alt="" />
          <img src="	https://ahujasons.com/images/ahuja/linkedin.svg" alt="" />
          <img src="	https://ahujasons.com/images/ahuja/pinterest.svg" alt="" />
          <img src="https://ahujasons.com/images/ahuja/youtube.svg" alt="" />
        </div>
        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
        <div class="input1">
          <input type="email" name="email" placeholder="Enter your eamil" />
          <label for="eamil">Subscribe</label>
        </div>
        <div
          v-for="(content, index) in footerContent"
          :key="content.id"
          class="shop"
        >
          <h3 @click="showDropLinks(index)" class="show-data">
            {{ content.id }}
            <div class="mobile-dynamic-icon">
              <svg
                v-if="index1 !== index"
                class="plus"
                xmlns="http://www.w3.org/2000/svg"
                height="23px"
                width="30px"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <svg
                v-if="index1 == index"
                class="minus"
                xmlns="http://www.w3.org/2000/svg"
                height="23px"
                width="30px"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </div>
          </h3>
          <div v-if="index1 == index" class="dropdown-content">
            <a
              v-for="category in content.categories"
              :key="category"
              href="#"
              >{{ category }}</a
            >
          </div>
        </div>
        <p class="last">
          Copyright © 2021 by Ahujasons I Powered by GreenHonchos
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      index1: -1,
      footerContent: [
        {
          id: "SHOP",
          categories: ["Men", "Woman", "Home", "Sale", "Collection"],
        },
        {
          id: "QUICK LINKS",
          categories: [
            "Ahujasons Export",
            "Ahujasons Wholesale",
            "Our Storyome",
            "Legacy",
            "Craftsman ship",
            "Our Store",
            "Blogs",
          ],
        },
        {
          id: "CUSTOMER SERVICE",
          categories: [
            "Terms and Condition",
            "Shipping & Delivery",
            "Returns & Cancellation",
            "Contact us",
            "Store appointment",
          ],
        },
        {
          id: "MY PROFILE",
          categories: [
            "My Account",
            "Track Order",
            "My Cart",
            "Wishlist",
            "Order History",
          ],
        },
      ],
    };
  },
  methods: {
    showDropLinks(index) {
      if (this.index1 !== index) {
        this.index1 = index;
      } else {
        this.index1 = -1;
      }
    },
  },
};
</script>
<style scoped>
#mobile-footer {
  display: none;
}
.footer {
  font-family: JostRegular;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(1, 1fr);
  background-color: white;
}
.topfooter {
  text-align: center;
  position: relative;
}
.topfooter img {
  max-width: 92.14px;
}

.topfooter::before {
  position: absolute;
  width: 45%;
  height: 2px;
  left: 1%;
  top: 50%;
  content: "";
  border-top: 1px solid rgb(214, 211, 211);
  border-bottom: 1px solid rgb(214, 211, 211);
}
.topfooter::after {
  position: absolute;
  width: 45%;
  height: 2px;
  right: 1%;
  top: 50%;
  content: "";
  border-top: 1px solid rgb(214, 211, 211);
  border-bottom: 1px solid rgb(214, 211, 211);
}

li {
  list-style: none;
  margin-bottom: 10px;
  font-size: 16px;
}
a {
  text-decoration: none;
  color: #303030;
  opacity: 0.8;
}
.bottomfooter {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-right: 20px;
  margin-left: 30px;
}
.footer h3 {
  color: #303030;
  margin-bottom: 10px;
  font-size: 16px;
  padding: 0%;
}
.footer h4 {
  color: #303030;
  margin-top: 50px;
  font-family: Jostbold;
  margin-bottom: 10px;
  font-size: 14px;
}
.signup {
  display: flex;
  flex-direction: column;
}
.signup p {
  font-size: 14px;
  color: #303030;
}
#copyright {
  opacity: 0.8;
}
.input1 {
  border-bottom: 1px solid black;
}
.input1 input {
  border: none;
  width: 75%;
}
.input1 input:focus {
  outline: none;
}
.input1 label {
  float: right;
  font-family: Jostbold;
}
.icon {
  display: flex;
  flex-direction: row;
  margin-bottom: 45px;
}
.icon img {
  margin-right: 27px;
}
@media screen and (max-width: 767px) {
  .bottomfooter {
    display: none;
  }
  /* .input1 input{
        width: auto;
    } */
  #mobile-footer {
    display: flex;
    flex-direction: column;
  }
  .signup h4,
  .icon,
  p,
  .last {
    margin-left: 20px;
    margin-right: 20px;
  }
  .last {
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .input1 {
    margin: 20px;
    margin-bottom: 40px;
  }
  .signup h4 {
    font-family: Jostbold;
    font-size: medium;
    margin-bottom: 20px;
  }
  .icon {
    display: flex;
    flex-direction: row;
    width: 50%;
    margin-bottom: 20px;
  }
  .shop h3,
  a {
    margin-left: 20px;
    font-weight: 400;
  }
  .shop {
    position: relative;
    border-bottom: 1px solid hsla(0, 0%, 77.3%, 0.47059);
  }
  .show-data {
    position: relative;
  }
  .mobile-dynamic-icon {
    position: absolute;
    right: 2%;
    top: 0%;
  }
  .dropdown-content {
    display: flex;
    flex-direction: column;
    z-index: 1;
    min-width: 100%;
    margin-bottom: 10px;
  }
  .dropdown-content a {
    padding: 12px 16px 0px 0;
    text-decoration: none;
    color: #303030;
  }
}
@media screen and (max-width: 358px) {
  .input1 input {
    width: auto;
  }
}
</style>
