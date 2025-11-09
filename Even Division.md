![image](https://github.com/manidweep1306/BeingZero/blob/main/photos/Screenshot%202025-11-09%20124119.png)


```java
import java.util.*;
import java.io.*;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long a[] = new long[n];
        for(int i=0;i<n;i++){
            a[i] = sc.nextLong();
        }
        for(int i=0;i<n;i++){ 
            if(a[i]==2) 
                System.out.println("NO");
            else if(a[i]%2==0)
                System.out.println("YES");
            else
                System.out.println("NO");
        }
    }
}
```
