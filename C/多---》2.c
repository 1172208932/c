//输入N,M表示节点数和边数，再输入M组边关系，从1到N输出每个结点的父亲，根节点父亲为0 
#include<cstdio> 
#include<algorithm>  
using namespace std;  
void read(int &x)  
{  
    int f=1;x=0;char s=getchar();  
    while(s<'0'||s>'9'){if(s=='-')f=-1;s=getchar();}  
    while(s>='0'&&s<='9'){x=x*10+s-'0';s=getchar();}  
    x*=f;  
}  
#define MAXN 100  
struct node  
{  
    int l,r,f;  
}tree[MAXN+5];  
int N,M;  
int root[MAXN+5],rs;  
bool d[MAXN+5][MAXN+5];  
void rtb()//处理森林
{  
    for(int i=1;i<=N;i++)  
        if(!tree[i].f)  
            root[++rs]=i;  
    for(int i=rs;i>1;i--)  
    {  
        tree[root[i-1]].r=root[i];  
        tree[root[i]].f=root[i-1];  
    }  
}  
int main()  
{  
    read(N),read(M);  
    for(int i=1;i<=M;i++)  
    {  
        int x,y;  
        read(x),read(y);  
        d[x][y]=1;//先保存起来
    }  
    for(int i=1;i<=N;i++)//再处理
        for(int j=1;j<=N;j++)  
            if(d[i][j])  
            {  
                if(tree[i].l==0)  
                {  
                    tree[i].l=j;  
                    tree[j].f=i;  
                }  
                else  
                {
                    int t=tree[i].l;
                    while(tree[t].r) t=tree[t].r;
                    tree[t].r=j;
                    tree[j].f=t;
                }
            }
    rtb();
    for(int i=1;i<=N;i++)  
    {  
        if(i<N) printf("%d\n",tree[i].f);  
        else printf("%d",tree[i].f);  
    }  
} 