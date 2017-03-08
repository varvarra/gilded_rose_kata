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



});
