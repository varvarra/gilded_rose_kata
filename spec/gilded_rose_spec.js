describe("Gilded Rose", function() {

  it("When sell by date has passed, quality degrades twice as fast", function() {
    const gilgedRose = new Shop([ new Item("foo", 0, 8) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
    expect(items[0].quality).toEqual(6)
  });

});
