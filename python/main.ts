

//% color="#1296db" iconWidth=50 iconHeight=40
namespace pyGaussianNB{


    //% block="读取CSV数据文件名[PATH].csv 编码为[ENCODING] 结果返回变量[DATA]中" blockType="command"
    //% PATH.shadow="string" PATH.defl="GG_dataset_Real_Processed"
    //% ENCODING.shadow="dropdown" ENCODING.options="ENCODING"
    //% DATA.shadow="normal" DATA.defl="HAR_df"
    export function read_csv(parameter: any, block: any) {
        let path=parameter.PATH.code;
        let encoding=parameter.ENCODING.code;
        let data=parameter.DATA.code;
        Generator.addImport(`from sklearn.naive_bayes import GaussianNB\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import metrics\nimport joblib\nimport pandas as pd\nimport numpy as np`)
        Generator.addCode(`${data} = pd.read_csv(${path}+".csv",encoding = "${encoding}")`)
 
    }

    //% block="从表格数据[DATA]中获取指定列的[VALUE] 结果返回变量[X]中" blockType="command"
    //% DATA.shadow="normal" DATA.defl="HAR_df"
    //% VALUE.shadow="list" VALUE.defl='"温度","湿度","光照","是否下雨"'
    //% X.shadow="normal" X.defl="X"
    export function set_value(parameter: any, block: any) {
        let value=parameter.VALUE.code;
        let x=parameter.X.code;
        let data=parameter.DATA.code;
        Generator.addImport(`from sklearn.naive_bayes import GaussianNB\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import metrics\nimport joblib\nimport pandas as pd\nimport numpy as np`)
        Generator.addCode(`${x} = ${data}[${value}].values`)
 
    }

    //% block="从表格数据[DATA]中获取结果列标签为[RESULT] 结果返回变量[Y]中" blockType="command"
    //% DATA.shadow="normal" DATA.defl="HAR_df"
    //% RESULT.shadow="list" RESULT.defl='"出行方式"'
    //% Y.shadow="normal" Y.defl="Y"
    export function set_result(parameter: any, block: any) {
        let y=parameter.Y.code;
        let result=parameter.RESULT.code;
        let data=parameter.DATA.code;
        Generator.addImport(`from sklearn.naive_bayes import GaussianNB\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import metrics\nimport joblib\nimport pandas as pd\nimport numpy as np`)
        Generator.addCode(`${y} = ${data}${result} `)
 
    }

    //% block="随机划分训练集和测试集 特征集[X]数据集[Y]样本占比[SIZE]随机数种子[RANDOM] " blockType="command"
    //% SIZE.shadow="range" SIZE.params.min=0    SIZE.params.max=1    SIZE.defl=0.3
    //% RANDOM.shadow="number" RANDOM.defl=1
    //% X.shadow="normal" X.defl="X"
    //% Y.shadow="normal" Y.defl="Y"
    export function train_test_split(parameter: any, block: any) {
        let x=parameter.X.code;
        let y=parameter.Y.code;
        let size=parameter.SIZE.code;
        let random=parameter.RANDOM.code;
        Generator.addImport(`from sklearn.naive_bayes import GaussianNB\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import metrics\nimport joblib\nimport pandas as pd\nimport numpy as np`)
        Generator.addCode(`X_train, X_test, y_train, y_test = train_test_split(${x},${y}, test_size=${size}, random_state=${random})`)

    }

    //% block="创建朴素贝叶斯分类器 开始训练" blockType="command"
    export function fit(parameter: any, block: any) {

        Generator.addImport(`from sklearn.naive_bayes import GaussianNB\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import metrics\nimport joblib\nimport pandas as pd\nimport numpy as np`)
        Generator.addCode(`gnb = GaussianNB()\ngnb.fit(X_train, y_train)`)
     
    }  

    //% block="预测测试集结果返回变量[DATA]中" blockType="command"
    //% DATA.shadow="normal" DATA.defl="y_pred"
    export function predict(parameter: any, block: any) {
        let data=parameter.DATA.code;

        Generator.addImport(`from sklearn.naive_bayes import GaussianNB\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import metrics\nimport joblib\nimport pandas as pd\nimport numpy as np`)
        Generator.addCode(`${data} = gnb.predict(X_test) `)
  
    }  
    

    //% block="根据预测结果[DATA]计算准确率" blockType="reporter"
    //% DATA.shadow="normal" DATA.defl="y_pred"
    export function accuracy_score(parameter: any, block: any) {
        let data=parameter.DATA.code;

        Generator.addImport(`from sklearn.naive_bayes import GaussianNB\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import metrics\nimport joblib\nimport pandas as pd\nimport numpy as np`)
        Generator.addCode(`metrics.accuracy_score(y_test, ${data})`)
 
    }  
 
    //% block="保存模型 文件名[PATH].pkl" blockType="command"
    //% PATH.shadow="string" PATH.defl="GG_Gaussian_Naive_Classifier_smarthome"
    export function save_module(parameter: any, block: any) {
        let path=parameter.PATH.code;

        Generator.addImport(`from sklearn.naive_bayes import GaussianNB\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import metrics\nimport joblib\nimport pandas as pd\nimport numpy as np`)
        Generator.addCode(`joblib.dump(gnb,${path}+".pkl")`)
 
    }  

    //% block="---"
    export function noteSep() {

    }

    //% block="加载模型 文件名[PATH].pkl" blockType="command"
    //% PATH.shadow="string" PATH.defl="GG_Gaussian_Naive_Classifier_smarthome"
    export function load_module(parameter: any, block: any) {
        let path=parameter.PATH.code;

        Generator.addImport(`from sklearn.naive_bayes import GaussianNB\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import metrics\nimport joblib\nimport pandas as pd\nimport numpy as np`)
        Generator.addCode(`GNB_model = joblib.load(${path}+".pkl")`)

    }  

    //% block="使用贝叶斯模型进行预测 输入参数[DATA]" blockType="reporter"
    //% DATA.shadow="list" DATA.defl="25,45,2000,0"
    export function load_module_predict(parameter: any, block: any) {
        let data=parameter.DATA.code;

        Generator.addImport(`from sklearn.naive_bayes import GaussianNB\nfrom sklearn.model_selection import train_test_split\nfrom sklearn import metrics\nimport joblib\nimport pandas as pd\nimport numpy as np`)
        Generator.addCode(`GNB_model.predict([${data}])[0]`)

    }  



 



    function replaceQuotationMarks(str:string){
            str=str.replace(/"/g, ""); //去除所有引号
            return str
    }


    
}
