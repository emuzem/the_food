#include <iostream>
using namespace std;
int main(){
int *ip;  // покажчик до integer
double *dp;   // покажчик до double
float *fp;  // покажчик до float
char *ch;  // покажчик до character

int var = 50;
int  *p;
p = &var;

cout << var << endl;
// Виводить 50

cout << p << endl;
// Виводить 0x29fee8

cout << *p << endl;
// Виводить 50 
}