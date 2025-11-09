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
        long s = 0;
        for(int i=0;i<n;i++){
            
            if(i!=b){ 
                    if(a[i] > s){
                        s = a[i];
                    }
            }   
        }
        System.out.print(max+" "+s);
    }
}
