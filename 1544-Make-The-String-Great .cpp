class Solution {
public:
vector numOfBurgers(int tomatoSlices, int cheeseSlices) {
if(tomatoSlices%2!=0)
return {};
else
{
int k=(tomatoSlices/2-cheeseSlices);
if(k<0)
return {};
int p=(cheeseSlices-k);
if(p<0)
return {};
return {k,p};
}
}
};