var mongoose = require('mongoose'); //引用mongoose模块
var db = mongoose.createConnection('localhost', 'test'); //创建一个数据库连接


db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function () {
    //一次打开记录
});

var PersonSchema = new mongoose.Schema({
    name: String //定义一个属性name，类型为String
});


var PersonModel = db.model('Person', PersonSchema);
//如果该Model已经发布，则可以直接通过名字索引到，如下：
//var PersonModel = db.model('Person');
//如果没有发布，上一段代码将会异常


var personEntity = new PersonModel({
    name: 'Krouky'
});
//打印这个实体的名字看看
console.log(personEntity.name); //Krouky


//为Schema模型追加speak方法
PersonSchema.methos.speak = function () {
    console.log('我的名字叫' + this.name);
}
var PersonModel = db.model('Person', PersonSchema);
var personEntity = new PersonModel({
    name: 'Krouky'
});
personEntity.speak(); //我的名字叫Krouky


personEntity.save(); //执行完成后，数据库就有该数据了


PersonModel.find(function (err, persons) {
    //查询到的所有person
});
const {
    Schema
} = require('mongoose');

const pptDelSchema = new Schema({
    live_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    ppt_name: {
        type: String
    },
    ppt_id: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'update_at'
    }
});

pptDelSchema.index({
    'ppt_id': 1,
    'live_id': 1
});

module.exports = pptDelSchema;
new PptdelModel(newData).save(function (err, item) {
    if (err) {
        slogger.error('创建PPTDEL失败', err);
        return genErrorCallback(
            ERROR_CODE.CREATE_PPT_DEL_FAIL,
            callback
        );
    }
    console.log('创建PPTDEL成功');
    // PptdelModel.find({}, function(err, item) {
    //     console.log('delppt:', item);
    next(null, item);
    // })
});
PptModel.remove(conditions, function (err) {
    if (err) {
        slogger.error('删除PPT失败', err);
        return genErrorCallback(
            ERROR_CODE.DEL_PPT_FAIL,
            callback
        );
    }
    console.log('删除ppt成功');
    next(false);
})
LiveModel.findById(data.live_id, 'item._id', function (err, item) {
    if (err) {
        slogger.error('查询数据库失败', err);
        return genErrorCallback(
            ERROR_CODE.QUERY_DB_FAIL,
            callback
        );
    }
    if (item) {
        console.log('live_id存在：', item);
        next(null, item);
    } else {
        return genErrorCallback(
            ERROR_CODE.LIVE_ID_NOT_EXIST_IN_DB,
            callback
        );
    }
})
PptModel.findOne({
    'live_id': data.live_id,
    'ppt_id': data.ppt_id
}, 'item._id', function (err, item) {
    if (err) {
        slogger.error('查询数据库失败', err);
        return genErrorCallback(
            ERROR_CODE.QUERY_DB_FAIL,
            callback
        );
    }
    if (item) {
        return genErrorCallback(
            ERROR_CODE.PPT_ADD_REPEATED,
            callback
        );
    } else {
        next(null, item);
    }
})
LiveModel.update({
    _id: data.live_id
}, {
    course_name: data.course_name,
    start_time: data.begin_time,
    end_time: data.end_time
}, function (err, item) {
    if (err) {
        slogger.error('修改直播数据时失败', err);
        return genErrorCallback(
            ERROR_CODE.MODIFY_LIVE_FAIL,
            callback
        );
    }
    next(false);
});
