
var ProductOfNumbers = function() {
    this.nums = [1]
    this.size = 0
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(num===0){
        this.nums = [1]
        this.size = 0
    }
    else{
        const last = this.nums[this.size]
        this.nums.push(last*num)
        this.size++
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if(k > this.size){
     return 0   
    }
    else{
        return this.nums[this.size] / this.nums[this.size-k]
    }
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */