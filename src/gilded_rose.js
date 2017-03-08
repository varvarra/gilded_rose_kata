class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
    this.MAX_QUALITY = 50
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.updateItem(this.items[i]);
    }
    return this.items;
  }

      updateItem(item) {
        item.sellIn -= this.dayChange(item);
        item.quality = this.calcQuality(item);
      }

      dayChange(item) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          return 1;
        }
        else {
          return 0;
        }
      }

      calcQuality(item) {
        switch (item.name) {
          case "Sulfuras, Hand of Ragnaros": {
            return item.quality;}
          case "Backstage passes": {
            if (item.sellIn < 0) {
              return 0;
            }
            if (item.quality < this.MAX_QUALITY) {
              if (item.sellIn < 11 && item.sellIn > 5) {
                return item.quality + 2;
              }
              if (item.sellIn < 6) {
                return item.quality + 3;
              }
            }
          }
          case 'Aged Brie': {
            if (item.quality < this.MAX_QUALITY) {
              return item.quality + 1;}
            else {return this.MAX_QUALITY;}
          }
          case 'Conjured': {
            if (item.quality < this.MAX_QUALITY) {
              return item.quality - (1*2);}
            else {return this.MAX_QUALITY;}
          }
          default:
            return this.qualityChangePace(item);
        }
      }
      qualityChangePace(item) {
        if (item.sellIn < 0) {
          if (item.quality === 0) {
            return item.quality;
          } else {
          return (item.quality - 2);
        }
        } else  {
          if (item.quality === 0) {
            return item.quality;
          } else{
          return (item.quality - 1);
        }
        }
      }

      checkNegative(item) {
        if (item.quality === 0) {
          return item.quality;
        }
      }
    }
