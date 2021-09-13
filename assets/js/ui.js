class UI {
    constructor() {
        this.currentContainer = document.getElementById("current-container");
        this.city;
        this.defaultCity = "Chicago";
    }

    generateHtml(data) {
        this.currentContainer.innerHTML = `
        
        <div>
            <div>
                <h5>${data.name}</h5>
                <h6>High of ${data.main.temp_max}. Low of ${data.main.temp_min}</h6>
            </div>
        </div>`;
    }
}

function clearHtml() {
    currentContainer.innerHTML = "";
}

function saveToLocal(data) {
    localStorage.setItem("city", JSON.stringify(data));
}

class getFromLocal {
    constructor() {
        if (localStorage.getItem("city" == null)) {
            return this.defaultCity;
        } else {
            this.city = JSON.parse(localStorage.getItem("city"));
        }

        return this.city;
    }
}

function clearLocal() {
    localStorage.clear();
}