/*
* @Author: lihaocheng
* @Date:   2018-04-30 10:00:38
* @Last Modified by:   lihaocheng
* @Last Modified time: 2018-04-30 10:02:58
*/
'use strict';

var _mm = require('util/mm.js');

var _product = {
    // 获取课程列表
    getProductList : function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取课程详细信息
    getProductDetail : function(productId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _product;