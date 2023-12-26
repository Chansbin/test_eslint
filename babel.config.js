/*
 * @Author: 陈绍斌 1748362428@qq.com
 * @Date: 2023-12-26 10:42:14
 * @LastEditors: 陈绍斌 1748362428@qq.com
 * @LastEditTime: 2023-12-26 11:26:18
 * @FilePath: \Babel\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const presets = [
    [
      '@babel/env',
      {
        debug: true,
        // targets:{
        //     chrome:'58'
        // }
      }
    ]
  ]
  const plugins = [
    [
        '@babel/plugin-transform-runtime',
        {
            corejs:3
        }
      ]
  ]
  
  module.exports = { presets, plugins }