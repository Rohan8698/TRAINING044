import java.util.HashMap;
import java.util.Map;

public class ShortestCompletingWord {
    public static String shortestCompletingWord(String licensePlate,String[] words){
        Map<Character,Integer>letterCounts=new HashMap<>();
        for(char c:licensePlate.toLowerCase().toCharArray()){
            if(Character.isLetter(c)){
                letterCounts.put(c,letterCounts.getOrDefault(c, 0)+1);
            }
        }
        String resutl="";
        for(String word:words){
            if(isCompletingWord(word,letterCounts)){
                            if(resutl.isEmpty()||word.length()<resutl.length()){
                                resutl=word;
                            }
                        }
                    }
                    return resutl;
                }
            
                private static boolean isCompletingWord(String word, Map<Character,Integer> letterCounts) {
                    Map<Character,Integer>wordLetterCounts=new HashMap<>();
                    for(char c:word.toLowerCase().toCharArray()){
                        if(Character.isLetter(c)){
                            wordLetterCounts.put(c,wordLetterCounts.getOrDefault(c, 0)+1);
                        }
                    }
                    for(Map.Entry<Character,Integer>entry:letterCounts.entrySet()){
                        char letter=entry.getKey();
                        int count=entry.getValue();
                        if(wordLetterCounts.getOrDefault(letter, 0)<count){
                            return false;
                        }
                    }
                    return true;
                }
                public static void main(String[] args) {
                    String licensePlate="1s3PSt";
                    String[] words={"step","steps","stripe","stepple"};
                    System.out.println("shortest completing word : "+shortestCompletingWord(licensePlate, words));
                }
}