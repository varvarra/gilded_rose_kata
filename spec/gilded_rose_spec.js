describe("Gilded Rose", function() {

  it("When seel by date has passed, quality degrades twice as fast", function() {
    const gilgedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});
