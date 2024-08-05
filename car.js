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
        if (this.chargeInterval) return; // Zaten şarj ediliyorsa çık

        this.chargeInterval = setInterval(() => {
            if (this.batteryLife < 100) {
                this.batteryLife = Math.min(this.batteryLife + 5, 100); // Şarj yüzdesini %100'ü geçmeyecek şekilde güncelle
                this.updateBatteryInfo();
                this.displayStatusMessage(`${this.model} model ${this.brand} markalı araç ${this.batteryLife}% kapasitesine sahip.`);
            } else {
                clearInterval(this.chargeInterval);
                this.chargeInterval = null;
                this.displayStatusMessage("Batarya tamamen dolu.");
            }
        }, 2000);
    }

    stopCharging() {
        if (this.chargeInterval) {
            clearInterval(this.chargeInterval);
            this.chargeInterval = null;
            this.displayStatusMessage("Şarj işlemi durduruldu.");
        }
    }

    updateBatteryInfo() {
        const batteryInfo = document.getElementById("battery-info");
        batteryInfo.textContent = `${this.model} model ${this.brand} markalı araç ${this.batteryLife}% kapasitesine sahip.`;
    }

    start() {
        if (this.batteryLife > 0) {
            super.start();
            this.batteryLife = Math.max(this.batteryLife - 20, 0); // Şarj yüzdesini sıfırın altına düşürmeyin
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
            this.displayStatusMessage("Batarya %0, aracı park edemezsiniz. Lütfen şarj edin.");
        }
    }
}

const electricCar = new ElectricCar("Tesla", "Model S", "2020", 100);

document.getElementById("startButton").addEventListener("click", () => {
    electricCar.start();
    electricCar.displayInfo();
});

document.getElementById("parkButton").addEventListener("click", () => {
    electricCar.stop();
});

document.getElementById("chargeButton").addEventListener("click", () => {
    electricCar.charge();
});

document.getElementById("stopChargingButton").addEventListener("click", () => {
    electricCar.stopCharging();
});
