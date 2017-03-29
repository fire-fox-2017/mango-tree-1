const assert = require('chai').assert
const expect = require('chai').expect

const { MangoTree, Mango } = require('./mango_tree_1.js')

describe('Release 0', () => {
  describe('New Tree', () => {
    const mangotree = new MangoTree()
    it('should be healthy', () => {

      assert.deepEqual(mangotree._healthy, true)
    })
    it('should start with age 0', () => {
      assert.deepEqual(mangotree.getAge(), 0)
    })
    it('should start with height 0', () => {
      assert.deepEqual(mangotree.getHeight(), 0)
    })
    it('should start with 0 num of fruits', () => {
      assert.deepEqual(mangotree.getFruits().length, 0)
    })
    it('should not able to harvest', () => {
      assert.deepEqual(mangotree.harvested, 0)
    })
  })
  describe('New Mango Class', () => {
    const mango = new Mango()
    it('should have quality > 1', () => {
      expect(mango._quality).to.be.at.least(1)
    })
  })
})

describe('Release 1: ', () => {
  const mangotree = new MangoTree()
  const heightBeforeGrow = mangotree.getHeight()

  describe('grow()', () => {
    it('should ages in year format', () => {
      mangotree.grow()
      mangotree.getAge()
      expect(mangotree.getAge()).to.be.at.least(1)
    })
    it('should add more heights', () => {
      mangotree.grow()
      expect(mangotree.getHeight()).to.be.above(heightBeforeGrow)
    })
    it('should get some fruits', () => {
      mangotree.produceMangoes()
      expect(mangotree.getFruits()).to.be.above(1)
    })
    it('should harvest some fruits', () => {
      mangotree.produceMangoes()
      mangotree.harvest()
      expect(mangotree.getFruits()).to.equal(0)
    })
    it('should die', () => {
      mangotree._age = 19
      mangotree.grow()
      expect(mangotree.getHealtyStatus()).to.be.false
    })
  })
})
