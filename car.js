class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    start() {
        this.displayStatusMessage(`${this.model} model ${this.brand} markalı araç çalışmaya başladı.`);
        this.move();
    }

    stop() {
        this.displayStatusMessage(`${this.model} model ${this.brand} markalı araç durduruldu.`);
        this.park();
    }

    move() {
        const carContainer = document.getElementById("car-container");
        carContainer.style.left = "80%";
    }

    park() {
        const carContainer = document.getElementById("car-container");
        carContainer.style.left = "0";

        // Arka plan rengini açık pembe yap
        carContainer.style.backgroundColor = "lightpink";
        
        // 3 saniye sonra eski rengine döndür
        setTimeout(() => {
            carContainer.style.backgroundColor = "#fff";
        }, 3000);
    }

    displayInfo() {
        const carInfo = document.getElementById("car-info");
        carInfo.textContent = `${this.brand} - ${this.model} - ${this.year}`;
    }

    displayStatusMessage(message) {
        const statusMessage = document.getElementById("status-message");
        statusMessage.textContent = message;
    }
}

class ElectricCar extends Car {
    constructor(brand, model, year, batteryLife) {
        super(brand, model, year);
        this.batteryLife = batteryLife;
        this.chargeInterval = null; // Şarj işlemi için referans
    }

    charge() {
        if (this.batteryLife < 100) {
            this.batteryLife = Math.min(this.batteryLife + 5, 100);
            this.updateBatteryInfo();
            this.displayStatusMessage(`${this.model} model ${this.brand} markalı araç ${this.batteryLife}% kapasitesine sahip.`);
        } else {
            this.displayStatusMessage("Batarya zaten tam şarjlı.");
        }
    }

    updateBatteryInfo() {
        const batteryInfo = document.getElementById("battery-info");
        batteryInfo.textContent = `${this.model} model ${this.brand} markalı araç ${this.batteryLife}% kapasitesine sahip.`;
    }

    start() {
        if (this.batteryLife > 0) {
            super.start();
            this.batteryLife = Math.max(this.batteryLife - 20, 0);
            this.updateBatteryInfo();
            this.displayStatusMessage(`${this.model} model ${this.brand} markalı araç çalışıyor.`);
        } else {
            this.displayStatusMessage("Arabayı çalıştırmak için yeterince şarjınız yok.");
        }
    }

    stop() {
        if (this.batteryLife > 0) {
            super.stop();
        } else {
            this.displayStatusMessage("Şarjınız bitmiş durumda, park etme işlemi yapılamaz.");
        }
    }

    stopCharging() {
        if (this.chargeInterval) {
            clearInterval(this.chargeInterval);
            this.chargeInterval = null;
            this.displayStatusMessage("Şarj işlemi durduruldu.");
        }
    }
}

const electricCar = new ElectricCar("Tesla", "Model S", "2020", 100);

document.getElementById("startButton").addEventListener("click", () => {
    electricCar.start();
    electricCar.displayInfo();
});

document.getElementById("parkButton").addEventListener("click", () => {
    electricCar.stop(); // Şarj oranı %0 ise park etmeyi engeller
});

document.getElementById("chargeButton").addEventListener("click", () => {
    electricCar.stopCharging(); // Önce varsa mevcut şarj işlemini durdur
    electricCar.chargeInterval = setInterval(() => {
        if (electricCar.batteryLife < 100) {
            electricCar.charge();
        } else {
            clearInterval(electricCar.chargeInterval);
            electricCar.chargeInterval = null;
        }
    }, 2000);
});

document.getElementById("stopChargingButton").addEventListener("click", () => {
    electricCar.stopCharging();
});
