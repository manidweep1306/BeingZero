![image](https://github.com/manidweep1306/BeingZero/blob/main/photos/Screenshot%202025-11-09%20142227.png)





```java
import java.util.*;
import java.io.*;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long a[] = new long[n];
        long c[] = new long[n];
        int d =0;
        int b =0;
        for(int i=0;i<n;i++)
            a[i] = sc.nextLong();
        long max = a[0];
        for(int i =1;i<n;i++){
            if(a[i]>max){
                max = a[i];
                 b = i;
            }
        }
        for(int i = 0;i<n;i++){
            if(i!=b){
                c[i] = max - a[i];
                
            }
        }
        long min = c[0];
        for(int i=0;i<n;i++){
            if(i!=b){ 
                if(c[i]<min){
                    min= c[i];
                    d = i;
                } 
            }   
        }
        long s = a[d]; 
        System.out.print(max+" "+s);
    }
}
```

