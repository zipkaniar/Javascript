class Car {

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    /**
     * Starts the car and logs a message to the console indicating that the car has started.
     *
     * @return {void} No return value.
     */
    start() {
        console.log(`${this.model} model ${this.brand} markalı araç çalışmaya başladı.`)
        this.move()
    }

    stop() {
        console.log(`${this.model} model ${this.brand} markalı araç durduruldu.`)
        this.park()
    }

    move() {
        const carContainer = document.getElementById("car-container")
        carContainer.style.left = "80%"
    }

    park() {
        const carContainer = document.getElementById("car-container")
        carContainer.style.left = "0"
    }

    displayInfo() {
        const carInfo = document.getElementById("car-info")
        carInfo.textContent = `${this.brand} - ${this.model} - ${this.year}`


    }
}



class ElectricCar extends Car {
    constructor(brand, model, year, batteryLife) {
        super(brand, model, year)
        this.batteryLife = batteryLife
    }


    charge() {
        this.batteryLife += 5
        this.updateBatteryInfo()
        console.log(`${this.model} model ${this.brand} markalı araç ${this.batteryLife}% kapasitesine sahip.`)
    }


    updateBatteryInfo() {
        const batteryInfo = document.getElementById("battery-info")
        batteryInfo.textContent = `${this.model} model ${this.brand} markalı araç ${this.batteryLife}% kapasitesine sahip.`
    }

    //override
    start() {
        if (this.batteryLife > 0) {
            super.start()
            this.batteryLife -= 40
            this.updateBatteryInfo()
        } else {
            console.log("Arabayı çalıştırmak için yeterince şarjınız yok.")
        }
    }
}

//const car = new Car("BMW", "X5", "2020")


const electricCar = new ElectricCar("Tesla", "Model S", "2020", 100)

document.getElementById("startButton").addEventListener("click", () => {
    electricCar.start()
    electricCar.displayInfo()
})

document.getElementById("parkButton").addEventListener("click", () => {
    electricCar.stop()
})

document.getElementById("chargeButton").addEventListener("click", () => {

    const batteryChargeInterval = setInterval(() => {
        if (electricCar.batteryLife < 100) {
            electricCar.charge()
        }
        if (electricCar.batteryLife === 100) {
            clearInterval(batteryChargeInterval)
        }
    }, 2000)


    /* 
        const timeOut = setTimeout(() => {
            clearInterval(batteryChargeInterval)
        }, 10000) */



    //clearInterval(batteryChargeInterval)
})

