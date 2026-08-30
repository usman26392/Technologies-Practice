export default function selectTo(updateOnly = false) {
  var x, i, j, l, ll, selElmnt, a, b, c;
  x = document.getElementsByClassName("custom-select");
  l = x.length;

  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;

    if (!updateOnly) {
      // If updateOnly is false, create the structure
      a = x[i].querySelector(".select-selected");
      b = x[i].querySelector(".select-items");

      if (!a) {
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        x[i].appendChild(a);
      }

      if (!b) {
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        x[i].appendChild(b);
      }

      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    } else {
      // If updateOnly is true, just update existing elements
      a = x[i].querySelector(".select-selected");
      b = x[i].querySelector(".select-items");

      if (!a || !b) {
        console.error(
          "Custom select structure not found. Ensure customSelect() was called without updateOnly first."
        );
        return;
      }

      // Clear previous options
      b.innerHTML = "";
    }

    // Populate options
    for (j = 1; j < ll; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;

      c.addEventListener("click", function (e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });

      b.appendChild(c);
    }

    if (!updateOnly) {
      a.addEventListener("click", function (e) {
        let heroformDropdown = document.querySelectorAll(
          ".hero-form__col:not(.hero-form__col--btnn) .hero-form__dropdown"
        );
        heroformDropdown.forEach(function (elmt) {
          elmt.classList.remove("active");
        });

        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        this.closest(".c_form-field").style.zIndex = 2
      });
    }
  }

  function closeAllSelect(elmnt) {
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  document.addEventListener("click", closeAllSelect);
}

