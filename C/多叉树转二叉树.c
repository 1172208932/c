#include <string>

#include<iostream>

using namespace std ;

struct Node { //以表的形式存储的树结点
char data;
int parent;
int lchild;
int rchild;
};

struct TreeNode { //以二叉链表存储的树的结点
char data;
TreeNode* l;
TreeNode* r;
};

int creattable( Node table[]){ //创建树的表并转化为二叉树
int n,k,i,j;
cout<<"输入结点个数:(<20)";
cin>>n;
if ( n>0 ){
  cout<<"输入结点信息和双亲编号(第一个请输入根结点信息如

a -1 ):"<<endl;
   for( i = 0; i < n; i++){
   cin>>table[i].data>>table[i].parent;
   table[i].lchild = table[i].rchild = 0;
   }
   for( i = 0; i < n; i++ ){
    for( j = 1;j < n; j++ ){
    if( table[j].parent == i )
     if( table[i].lchild == 0 ){
      table[i].lchild = j;
      k = j;
     }
     else{
      table[k].rchild = j;
      k = j;
     }
    }
   }
   for( i = 0; i < n; i++)
   cout<<table[i].data<<table[i].parent<<table

[i].lchild<<table[i].rchild<<endl;
}
return n;
}

void Build ( TreeNode*& current,Node node[], int pos ,int n ){ //将表

转化为二叉链表
if (n>0)
{if ( current == 0 ){
   current = new TreeNode;
   current->l = current->r = 0;
}
current->data = node[pos].data;
if (node[pos].lchild )
   Build( current->l, node, node[pos].lchild, n);

if (node[pos].rchild )  
   Build( urrent->r ,node, node[pos].rchild, n);
}
}

void Visit ( TreeNode* current ){ //访问结点
cout<<current->data<<" ";
}

void Preorder( TreeNode* root ){ //按先序遍历
   TreeNode* current = root;
   if( current != 0 ){   
    Visit( current );
    Preorder( current->l );
    Preorder( current->r );  
   }
}

int main(){

Node node [20];
int n = creattable( node );
TreeNode* root = 0;

Build ( root, node, 0 , n);
if (root){
  cout<<"先序遍历：";
   Preorder ( root );
  cout<<endl;
}
else
  cout<<"空树！"<<endl;
return 1;
}