class Map{
    constructor(){
        this.blocks = [];
        this.blocks.push([[200, 2000], [3300, 2000], [3300, 2100], [200, 2100]]);
        this.blocks.push([[-200, 2000], [-3300, 2000], [-3300, 2100], [-200, 2100]]);
        this.blocks.push([[3200, 2000], [3300, 2000], [3300, -2000], [3200, -2000]]);
        this.blocks.push([[-3200, 2000], [-3300, 2000], [-3300, -2000], [-3200, -2000]]);
        this.blocks.push([[-3300, -2100], [3300, -2100], [3300, -2000], [-3300, -2000]]);
        this.blocks.push([[100, 100], [200, 100], [200, 2100], [-200, 2100], [-200, 200], [-300, 200], [-300, 100], [-100, 100], [-100, 2000], [100, 2000]]);
        this.blocks.push([[200, 100], [500, 100], [500, 400], [300, 400], [300, 300], [400, 300], [400, 200], [200, 200]]);
        this.blocks.push([[100, -300], [200, -300], [200, -200], [300, -200], [300, -300], [400, -300], [400, -200], [500, -200], [500, -300], [600, -300], [600, -200], [700, -200], [700, -300], [800, -300], [800, -100], [100, -100]]);
        this.blocks.push([[900, -300], [1000, -300], [1000, -200], [1100, -200], [1100, -300], [1200, -300], [1200, -200], [1300, -200], [1300, -300], [1400, -300], [1400, -200], [1500, -200], [1500, -300], [1600, -300], [1600, -100], [900, -100]]);
        this.blocks.push([[100, -600], [100, -400], [200, -400], [200, -500], [300, -500], [300, -400], [400, -400], [400, -500], [500, -500], [500, -400], [600, -400], [600, -500], [700, -500], [700, -400], [800, -400], [800, -500], [900, -500], [900, -400], [1000, -400], [1000, -500], [1100, -500], [1100, -400], [1200, -400], [1200, -500], [1300, -500], [1300, -400], [1400, -400], [1400, -500], [1500, -500], [1500, -400], [1600, -400], [1600, -600]]);
        this.blocks.push([[700, 100], [800, 100], [800, 600], [700, 600]]);
        this.blocks.push([[200, 500], [500, 500], [500, 600], [200, 600]]);
        this.blocks.push([[900, 100], [1600, 100], [1600, 200], [1000, 200], [1000, 500], [1600, 500], [1600, 600], [900, 600]]);
        this.blocks.push([[1800, 100], [1900, 100], [1900, 900], [300, 900], [300, 800], [1800, 800]]);
        this.blocks.push([[200, 1100], [1900, 1100], [1900, 1200], [200, 1200]]);
        this.blocks.push([[2100, -100], [2200, -100], [2200, 1100], [2100, 1100]]);
        this.blocks.push([[1600, -200], [1900, -200], [1900, -900], [500, -900], [500, -1000], [2000, -1000], [2000, -100], [1600, -100]]);
        this.blocks.push([[2000, -200], [3200, -200], [3200, -100], [2000, -100]]);
        this.blocks.push([[100, -1400], [2400, -1400], [2400, -500], [2300, -500], [2300, -1300], [200, -1300], [200, -600], [100, -600]]);
        this.blocks.push([[100, -2000], [200, -2000], [200, -1400], [100, -1400]]);
        this.blocks.push([[400, -1700], [2700, -1700], [2700, -200], [2600, -200], [2600, -1600], [400, -1600]]);
        this.blocks.push([[2900, -2000], [3000, -2000], [3000, -400], [2900, -400]]);
        this.blocks.push([[400, 1400], [600, 1400], [600, 1600], [400, 1600]]);
        this.blocks.push([[900, 1700], [1000, 1700], [1000, 1600], [1100, 1600], [1100, 1700], [1200, 1700], [1200, 1800], [1100, 1800], [1100, 1900], [1000, 1900], [1000, 1800], [900, 1800]]);
        this.blocks.push([[1400, 1300], [1700, 1300], [1700, 1600], [1400, 1600]]);
        this.blocks.push([[1600, 1800], [2200, 1800], [2200, 1900], [1600, 1900]]);
        this.blocks.push([[2100, 1400], [2200, 1400], [2200, 1300], [2300, 1300], [2300, 1200], [2400, 1200], [2400, 1300], [2500, 1300], [2500, 1400], [2600, 1400], [2600, 1500], [2500, 1500], [2500, 1600], [2400, 1600], [2400, 1700], [2300, 1700], [2300, 1600], [2200, 1600], [2200, 1500], [2100, 1500]]);
        this.blocks.push([[2600, 1700], [2900, 1700], [2900, 1400], [3000, 1400], [3000, 1800], [2600, 1800]]);
        this.blocks.push([[2700, 1000], [2800, 1000], [2800, 1100], [2900, 1100], [2900, 1000], [3000, 1000], [3000, 1200], [2700, 1200]]);
        this.blocks.push([[2200, 800], [3000, 800], [3000, 900], [2200, 900]]);
        this.blocks.push([[2300, 200], [2400, 200], [2400, 300], [2300, 300]]);
        this.blocks.push([[2600, 100], [2800, 100], [2800, 300], [2600, 300]]);
        this.blocks.push([[3000, 100], [3100, 100], [3100, 500], [3000, 500]]);
        this.blocks.push([[2400, 500], [3200, 500], [3200, 600], [2400, 600]]);
    }

    getSurroundings(x, y){
        return this.blocks;
    }
}

module.exports = Map;