angular.module('app').directive('personalBACTable', personalBACTable);


function personalBACTable() {
    return{
        template: '<div class="table-container"><table class="table"> <tr><th class="center title-header" colspan="12">Numbers of Hours You Drink</th></tr>' +
        '<tr><th rowspan="11" class="box-rotate vertical-title-header"><div><span>Number of Drinks You Might Have</span></div></th><th class="EMPTY"></th> <th class="1">1</th> <th class="2">2' +
        '</th> <th class="3">3</th> <th class="4">4</th> <th class="5">5</th> <th class="6">6</th> <th class="7">7</th> ' +
        '<th class="8">8</th> <th class="9">9</th> <th class="10">10</th> </tr><tr> <th >1</th><td>0.013</td>' +
        '<td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>' +
        '<tr> <th>2</th><td>0.043</td><td>0.026</td><td>0.009</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0' +
        '</td></tr><tr> <th >3</th><td>0.073</td><td>0.056</td><td>0.039</td><td>0.022</td><td>0.005</td>' +
        '<td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr> <th>4</th><td>0.103</td><td>0.086</td>' +
        '<td>0.069</td><td>0.052</td><td>0.035</td><td>0.018</td><td>0.001</td><td>0</td><td>0</td><td>0</td></tr><tr>' +
        ' <th >5</th><td>0.133</td><td>0.116</td><td>0.099</td><td>0.082</td><td>0.065</td><td>0.048</td><td>' +
        '0.031</td><td>0.014</td><td>0</td><td>0</td></tr><tr> <th >6</th><td>0.163</td><td>0.146</td>' +
        '<td>0.129</td><td>0.112</td><td>0.095</td><td>0.078</td><td>0.061</td><td>0.044</td><td>0.027</td><td>0.01' +
        '</td></tr><tr> <th >7</th><td>0.193</td><td>0.176</td><td>0.159</td><td>0.142</td><td>0.125</td>' +
        '<td>0.108</td><td>0.091</td><td>0.074</td><td>0.057</td><td>0.04</td></tr><tr> <th >8</th><td>' +
        '0.233</td><td>0.206</td><td>0.189</td><td>0.172</td><td>0.155</td><td>0.138</td><td>0.121</td><td>0.104' +
        '</td><td>0.087</td><td>0.007</td></tr><tr> <th >9</th><td>0.253</td><td>0.236</td><td>0.219' +
        '</td><td>0.202</td><td>0.185</td><td>0.168</td><td>0.151</td><td>0.134</td><td>0.117</td><td>0.1</td>' +
        '</tr><tr> <th >10</th><td>0.283</td><td>0.266</td><td>0.249</td><td>0.232</td><td>0.215</td>' +
        '<td>0.198</td><td>0.181</td><td>0.164</td><td>0.147</td><td>0.13</td></tr></table></div>'
    };
}







