#include<iostream> 
#include<string> 
using namespace std;
struct Node // 以表的形式存储的树结点 
{
	char data;
	int parent; int lchild; int rchild; 
};
struct TreeNode // 以二叉链表存储的树结点 
{
	char data; TreeNode *l; TreeNode *r; 
}; 

int creattable(Node table[])// 创建树的表并转化为二叉树的表
{
	int n, k, i, j;
	cout << "输入结点个数(<20): "; 
	cin >> n; 
	if (n > 0) 
	{
		cout << "输入结点信息和双亲编号(第一个请输入根结点信息如a -1 ):" << endl;
		for (i = 0; i < n; i++) 
		{
			cin >> table[i].data >> table[i].parent; 
			table[i].lchild = table[i].rchild = 0; 
		}
		for (i = 0; i < n; i++)
		{
			for (j = 1; j < n; j++) 
			{
				if (table[j].parent == i) 
				{
					if (table[i].lchild == 0) 
					{
						table[i].lchild = j; k = j; 
					} 
					else 
					{
						table[k].rchild = j; k = j; 
					} 
				} 
			} 
		}
		for (i = 0; i < n; i++) 
		{
			cout << table[i].data << table[i].parent ;
			cout << table[i].lchild<< table[i].rchild << endl;
		} 
	}
	return n; 
}