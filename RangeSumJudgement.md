![photos](https://github.com/manidweep1306/BeingZero/blob/main/photos/Screenshot%202025-11-09%20162846.png)

```java
import java.util.*;
import java.io.*;
class Main {
    public static long sum(long n){
        return (n*(n+1))/2;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); 
        long n =sc.nextLong();
        for(int i=0;i<n;i++){
            long l =sc.nextLong();
            long r =sc.nextLong();
            long s =sc.nextLong();
            long lsum = sum(l-1);
            long rsum = sum(r);
            long a;
            if(l<r)
                a = rsum - lsum;
            else
                a = lsum - rsum;
            if(a==s)
                System.out.println("NEUTRAL");
            else if(a>s){
                long c =a-s;
                System.out.println("DECREASE "+c);
            }
            else{
                long c =s-a;
                System.out.println("INCREASE "+c);
            }
        }
    }
}
```
