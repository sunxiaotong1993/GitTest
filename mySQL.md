## MYSQL语句

#### 插入语句:

INSERT INTO 表名(字段1,字段2..) VALUES(值1,值2);

~~~
🌰:INSERT INTO User "age" VALUES 20
~~~



#### 单条数据插入:

INSERT INTO 表名(字段1,字段2...) VALUES(值1,值2);

~~~
🌰:INSERT INTO User(name,age,sex) VALUES("李萌",23,"女")
~~~



#### 插入多条数据:

同单条一样,就是在VALUES后面一次加入要新增的数据:

~~~
🌰:INSERT INTO User(name,age,sex) VALUES ("张傲",8,"男"),("梁佳军",18,"女")
~~~



#### 删除数据:

##### DELETE FROM 表名 WHERE条件

删除表里的全部数据,但是不删除表格:

~~~
🌰:DELETE FROM User
~~~



删除User表中id等于1的那条数据:

~~~
🌰:DELETE FROM User id = 1
~~~



同时满足两个条件:性别为女,且年龄大于18的,使用AND链接:

~~~
🌰:DELETE FROM User WHERE sex = "女" AND age > 8
~~~



#### 不添加条件,改变此表中对应字段值:

UPDATE 表名 SET 字段1 = 值1 ,字段2 = 值2... WHERE 条件

~~~
🌰:UPDATE User1 SET name = "凯丽",age = 28 WHERE id = 3
~~~



#### 查找

查找所有数据:

~~~
🌰:SELECT * FROM User
~~~



查找年龄大于18的数据:

~~~
🌰:SELECT * FROM `User` WHERE age != 18
~~~















