describe("Gilded Rose", function() {

  it("When sell by date has passed, quality degrades twice as fast", function() {
    const gilgedRose = new Shop([ new Item("foo", 0, 8) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
    expect(items[0].quality).toEqual(6)
  });

  it("The Quality of an item is never negative", function(){
    const gilgedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  });

  it("'Aged Brie' actually increases in Quality the older it gets", function(){
    const gilgedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(1)
  });

  it("The Quality of an item is never more than 50", function(){
    const gilgedRose = new Shop([ new Item('Aged Brie', 0, 50) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
  });


  describe("'Sulfuras, Hand of Ragnaros'", function(){
    it("never has to be sold", function(){
      const gilgedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0)
    });
    it("can not decrease in quality", function(){
      const gilgedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].quality).toEqual(80)
    });
  });

  describe("Backstage passes", function(){
    it("Quality increases by 2 when there are 10 days or less but Quality drops to 0 after the concert", function(){
      const gilgedRose = new Shop([ new Item('Backstage passes', 10, 10) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].quality).toEqual(12)
    });

    it("Quality increases by 3 when there are 5 days or less", function(){
      const gilgedRose = new Shop([ new Item('Backstage passes', 5, 10) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].quality).toEqual(13)
    });

    it("but Quality drops to 0 after the concert", function(){
      const gilgedRose = new Shop([ new Item('Backstage passes', 0, 10) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].quality).toEqual(0)
    });
  });

  describe("Conjured items", function(){
    it("degrade in Quality twice as fast as normal items", function(){
      const gilgedRose = new Shop([ new Item('Conjured', 5, 10) ]);
      const items = gilgedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4)
      expect(items[0].quality).toEqual(8)
    });
  });

});
