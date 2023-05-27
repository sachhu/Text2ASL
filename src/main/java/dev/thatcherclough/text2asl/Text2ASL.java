package dev.thatcherclough.text2asl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.util.ArrayList;


import dev.thatcherclough.text2asl.translator.base.ASLResponse;
import dev.thatcherclough.text2asl.translator.service.ASLConversionService;
import com.google.common.io.Files;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Text2ASL {
	/**
	 * Starts Text2ASL.
	 * 
	 * @param args command line arguments
	 */
	public static void main(String[] args) {
		try {
			String sentence = args[0];
			ASLConversionService alsConversionService = new ASLConversionService();
			ASLResponse result = alsConversionService.getASLSentence(sentence);
			System.out.println(result.getSentence());
		} catch (Exception e) {
			error(e);
		}
	}
	/** 
	 * 
	 * @param e Exception
	 */
	public static void error(Exception e) {
		e.printStackTrace();
	}
}