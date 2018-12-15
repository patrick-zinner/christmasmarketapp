package com.patrickzinner.christmasmarketsserver.facade;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.patrickzinner.christmasmarketsserver.model.Christmasmarket;
import com.patrickzinner.christmasmarketsserver.model.ExtraordinaryOpeningHours;
import com.patrickzinner.christmasmarketsserver.model.LatLng;
import com.patrickzinner.christmasmarketsserver.model.NormalOpeningHours;
import com.patrickzinner.christmasmarketsserver.repository.ChristmasmarketRepository;

@Component
@Transactional
public class CreateTestdataFacade {

	@Autowired
	private ChristmasmarketRepository repo;

	private Date date(String str) {
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			return sdf.parse(str);
		} catch (Exception e) {
			return null;
		}
	}

	private BigDecimal bd(String bd) {
		return new BigDecimal(bd);
	}

	private int uhr(String zeit) {
		String[] splitter = zeit.split(":");
		int hour = Integer.parseInt(splitter[0]);
		int min = Integer.parseInt(splitter[1]);
		return hour * 60 + min;
	}

	public void create() {
		List<Christmasmarket> markets = new ArrayList<>();

		// 2018
		Christmasmarket m1 = new Christmasmarket("Weihnachtsmarkt Am Hof", date("2018-11-16"), date("2018-12-23"),
				"1010", "Wien", "Am Hof", new LatLng("48.211027", "16.368120"));
		markets.add(m1);
		m1.addNormalOpeningHours(new NormalOpeningHours(true, 660, 1260, Calendar.MONDAY));
		m1.addNormalOpeningHours(new NormalOpeningHours(true, 660, 1260, Calendar.TUESDAY));
		m1.addNormalOpeningHours(new NormalOpeningHours(true, 660, 1260, Calendar.WEDNESDAY));
		m1.addNormalOpeningHours(new NormalOpeningHours(true, 660, 1260, Calendar.THURSDAY));
		m1.addNormalOpeningHours(new NormalOpeningHours(true, 600, 1260, Calendar.FRIDAY));
		m1.addNormalOpeningHours(new NormalOpeningHours(true, 600, 1260, Calendar.SATURDAY));
		m1.addNormalOpeningHours(new NormalOpeningHours(true, 600, 1260, Calendar.SUNDAY));

		Christmasmarket m2 = new Christmasmarket("ART ADVENT – Kunst & Handwerk am Karlsplatz", date("2018-11-23"), date("2018-12-23"),
				"1040", "Wien", "Resselpark", new LatLng("48.199559", "16.368428"));
		markets.add(m2);
		m2.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("20:00"), Calendar.MONDAY));
		m2.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("20:00"), Calendar.TUESDAY));
		m2.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("20:00"), Calendar.WEDNESDAY));
		m2.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("20:00"), Calendar.THURSDAY));
		m2.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("20:00"), Calendar.FRIDAY));
		m2.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("20:00"), Calendar.SATURDAY));
		m2.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("20:00"), Calendar.SUNDAY));

		Christmasmarket m3 = new Christmasmarket("Weihnachtszauber am Wilhelminenberg", date("2018-11-16"),
				date("2018-12-23"), "1160", "Wien", "Savoyenstraße 2", new LatLng("48.219576", "16.285577"));
		markets.add(m3);
		m3.addNormalOpeningHours(new NormalOpeningHours(true, uhr("16:00"), uhr("21:00"), Calendar.MONDAY));
		m3.addNormalOpeningHours(new NormalOpeningHours(true, uhr("16:00"), uhr("21:00"), Calendar.TUESDAY));
		m3.addNormalOpeningHours(new NormalOpeningHours(true, uhr("16:00"), uhr("21:00"), Calendar.WEDNESDAY));
		m3.addNormalOpeningHours(new NormalOpeningHours(true, uhr("16:00"), uhr("21:00"), Calendar.THURSDAY));
		m3.addNormalOpeningHours(new NormalOpeningHours(true, uhr("15:00"), uhr("21:00"), Calendar.FRIDAY));
		m3.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.SATURDAY));
		m3.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.SUNDAY));
	

		Christmasmarket m4 = new Christmasmarket("Adventzauber am Rathausplatz", date("2018-11-16"), date("2018-12-26"),
				"1010", "Wien", "Rathausplatz", new LatLng("48.210629", "16.358778"));
		markets.add(m4);
		m4.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:30"), Calendar.MONDAY));
		m4.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:30"), Calendar.TUESDAY));
		m4.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:30"), Calendar.WEDNESDAY));
		m4.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:30"), Calendar.THURSDAY));
		m4.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("22:00"), Calendar.FRIDAY));
		m4.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("22:00"), Calendar.SATURDAY));
		m4.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:30"), Calendar.SUNDAY));
		m4.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(true, uhr("10:00"), uhr("19:00"), date("2018-12-24")));

		Christmasmarket m5 = new Christmasmarket("Blumengärten Hirschstetten", date("2018-11-22"), date("2018-12-23"),
				"1220", "Wien", "Quadenstraße 15", new LatLng("48.236160", "16.472608"));
		markets.add(m5);
		m5.addNormalOpeningHours(new NormalOpeningHours(false, null, null, Calendar.MONDAY));
		m5.addNormalOpeningHours(new NormalOpeningHours(false, null, null, Calendar.TUESDAY));
		m5.addNormalOpeningHours(new NormalOpeningHours(false, null, null, Calendar.WEDNESDAY));
		m5.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("20:00"), Calendar.THURSDAY));
		m5.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("20:00"), Calendar.FRIDAY));
		m5.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("20:00"), Calendar.SATURDAY));
		m5.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("20:00"), Calendar.SUNDAY));

		Christmasmarket m6 = new Christmasmarket("Weihnachtsdorf Schloss Belvedere", date("2018-11-23"),
				date("2018-12-26"), "1030", "Wien", "Prinz Eugen-Straße 27", new LatLng("48.191488", "16.380910"));
		markets.add(m6);
		m6.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.MONDAY));
		m6.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.TUESDAY));
		m6.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.WEDNESDAY));
		m6.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.THURSDAY));
		m6.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.FRIDAY));
		m6.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.SATURDAY));
		m6.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.SUNDAY));
		m6.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("16:00"), date("2018-12-24")));
		m6.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("19:00"), date("2018-12-25")));
		m6.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("19:00"), date("2018-12-26")));

		Christmasmarket m7 = new Christmasmarket("Altwiener Christkindlmarkt", date("2018-11-17"), date("2018-12-23"),
				"1010", "Wien", "Freyung", new LatLng("48.211725", "16.365103"));
		markets.add(m7);
		m7.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.MONDAY));
		m7.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.TUESDAY));
		m7.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.WEDNESDAY));
		m7.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.THURSDAY));
		m7.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.FRIDAY));
		m7.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.SATURDAY));
		m7.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.SUNDAY));

		Christmasmarket m8 = new Christmasmarket("Weihnachtsmarkt am Stephansplatz", date("2018-11-16"),
				date("2018-12-26"), "1010", "Wien", "Stephansplatz", new LatLng("48.208982", "16.373213"));
		markets.add(m8);
		m8.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.MONDAY));
		m8.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.TUESDAY));
		m8.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.WEDNESDAY));
		m8.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.THURSDAY));
		m8.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.FRIDAY));
		m8.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.SATURDAY));
		m8.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.SUNDAY));
		m8.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("16:00"), date("2018-12-24")));
		m8.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("19:00"), date("2018-12-25")));
		m8.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("19:00"), date("2018-12-26")));

		Christmasmarket m9 = new Christmasmarket("Weihnachtsmarkt Schloss Schönbrunn", date("2018-11-24"),
				date("2018-12-26"), "1140", "Wien", "Schloss Schönbrunn", new LatLng("48.184865", "16.312240"));
		markets.add(m9);
		m9.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.MONDAY));
		m9.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.TUESDAY));
		m9.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.WEDNESDAY));
		m9.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.THURSDAY));
		m9.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.FRIDAY));
		m9.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.SATURDAY));
		m9.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.SUNDAY));
		m9.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(true, uhr("10:00"), uhr("16:00"), date("2018-12-24")));
		m9.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(true, uhr("10:00"), uhr("18:00"), date("2018-12-25")));
		m9.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(true, uhr("10:00"), uhr("18:00"), date("2018-12-26")));

		Christmasmarket m10 = new Christmasmarket("Weihnachtsdorf Maria-Theresien-Platz", date("2018-11-21"),
				date("2018-12-26"), "1010", "Wien", "Maria-Theresien-Platz", new LatLng("48.204488", "16.360776"));
		markets.add(m10);
		m10.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.MONDAY));
		m10.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.TUESDAY));
		m10.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.WEDNESDAY));
		m10.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.THURSDAY));
		m10.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("22:00"), Calendar.FRIDAY));
		m10.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("22:00"), Calendar.SATURDAY));
		m10.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.SUNDAY));
		m10.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("16:00"), date("2018-12-24")));
		m10.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("19:00"), date("2018-12-25")));
		m10.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("19:00"), date("2018-12-26")));

		Christmasmarket m11 = new Christmasmarket("Weihnachtsdorf Altes AKH", date("2018-11-17"), date("2018-12-23"),
				"1090", "Wien", "Hof 1", new LatLng("48.215532", "16.352691"));
		markets.add(m11);
		m11.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("22:00"), Calendar.MONDAY));
		m11.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("22:00"), Calendar.TUESDAY));
		m11.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("22:00"), Calendar.WEDNESDAY));
		m11.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("23:00"), Calendar.THURSDAY));
		m11.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("23:00"), Calendar.FRIDAY));
		m11.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("23:00"), Calendar.SATURDAY));
		m11.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.SUNDAY));
	

		Christmasmarket m12 = new Christmasmarket("Weihnachtsmarkt am Spittelberg", date("2018-11-15"),
				date("2018-12-23"), "1070", "Wien", "Spittelberggasse", new LatLng("48.203341", "16.355250"));
		markets.add(m12);
		m12.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.MONDAY));
		m12.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.TUESDAY));
		m12.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.WEDNESDAY));
		m12.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.THURSDAY));
		m12.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:30"), Calendar.FRIDAY));
		m12.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:30"), Calendar.SATURDAY));
		m12.addNormalOpeningHours(new NormalOpeningHours(true, uhr("10:00"), uhr("21:00"), Calendar.SUNDAY));
		m12.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("10:00"), uhr("21:00"), date("2018-12-08")));

		Christmasmarket m13 = new Christmasmarket("Wintermarkt am Riesenradplatz", date("2018-11-17"),
				date("2019-01-06"), "1020", "Wien", "Riesenradplatz", new LatLng("48.216968", "16.396284"));
		markets.add(m13);
		m13.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("22:00"), Calendar.MONDAY));
		m13.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("22:00"), Calendar.TUESDAY));
		m13.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("22:00"), Calendar.WEDNESDAY));
		m13.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("22:00"), Calendar.THURSDAY));
		m13.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("22:00"), Calendar.FRIDAY));
		m13.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("22:00"), Calendar.SATURDAY));
		m13.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("22:00"), Calendar.SUNDAY));
		m13.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("22:00"), date("2018-12-08")));
		m13.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("10:00"), uhr("17:00"), date("2018-12-24")));
		m13.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("22:00"), date("2018-12-25")));
		m13.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("22:00"), date("2018-12-26")));
		m13.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("23:59"), date("2018-12-31")));
		m13.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("22:00"), date("2018-01-01")));
		m13.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("22:00"), date("2018-01-06")));

		Christmasmarket m14 = new Christmasmarket("K.u.K. Weihnachtsmarkt", date("2018-11-16"), date("2019-01-01"),
				"1010", "Wien", "Michaelerplatz", new LatLng("48.207994", "16.366517"));
		markets.add(m14);
		m14.addNormalOpeningHours(new NormalOpeningHours(true, uhr("09:00"), uhr("20:00"), Calendar.MONDAY));
		m14.addNormalOpeningHours(new NormalOpeningHours(true, uhr("09:00"), uhr("20:00"), Calendar.TUESDAY));
		m14.addNormalOpeningHours(new NormalOpeningHours(true, uhr("09:00"), uhr("20:00"), Calendar.WEDNESDAY));
		m14.addNormalOpeningHours(new NormalOpeningHours(true, uhr("09:00"), uhr("20:00"), Calendar.THURSDAY));
		m14.addNormalOpeningHours(new NormalOpeningHours(true, uhr("09:00"), uhr("20:00"), Calendar.FRIDAY));
		m14.addNormalOpeningHours(new NormalOpeningHours(true, uhr("09:00"), uhr("20:00"), Calendar.SATURDAY));
		m14.addNormalOpeningHours(new NormalOpeningHours(true, uhr("09:00"), uhr("20:00"), Calendar.SUNDAY));
		m14.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("09:00"), uhr("17:00"), date("2018-12-24")));

		Christmasmarket m15 = new Christmasmarket("Advent-Genussmarkt bei der Oper", date("2018-11-16"),
				date("2018-12-31"), "1010", "Wien", "Mahlerstraße 6", new LatLng("48.202698", "16.371091"));
		markets.add(m15);
		m15.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.MONDAY));
		m15.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.TUESDAY));
		m15.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.WEDNESDAY));
		m15.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.THURSDAY));
		m15.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.FRIDAY));
		m15.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.SATURDAY));
		m15.addNormalOpeningHours(new NormalOpeningHours(true, uhr("11:00"), uhr("21:00"), Calendar.SUNDAY));
		m15.addExtraordinaryOpeninghours(new ExtraordinaryOpeningHours(false, null, null, date("2018-12-24")));
		m15.addExtraordinaryOpeninghours(
				new ExtraordinaryOpeningHours(true, uhr("11:00"), uhr("23:59"), date("2018-12-31")));

		Christmasmarket m16 = new Christmasmarket("Weihnachtsmarkt im Türkenschanzpark", date("2018-11-16"),
				date("2018-12-24"), "1180", "Wien", "Türkenschanzpark", new LatLng("48.235508", "16.333902"));
		markets.add(m16);
		m16.addNormalOpeningHours(new NormalOpeningHours(true, uhr("15:00"), uhr("22:00"), Calendar.MONDAY));
		m16.addNormalOpeningHours(new NormalOpeningHours(true, uhr("15:00"), uhr("22:00"), Calendar.TUESDAY));
		m16.addNormalOpeningHours(new NormalOpeningHours(true, uhr("15:00"), uhr("22:00"), Calendar.WEDNESDAY));
		m16.addNormalOpeningHours(new NormalOpeningHours(true, uhr("15:00"), uhr("22:00"), Calendar.THURSDAY));
		m16.addNormalOpeningHours(new NormalOpeningHours(true, uhr("15:00"), uhr("22:00"), Calendar.FRIDAY));
		m16.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("22:00"), Calendar.SATURDAY));
		m16.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("22:00"), Calendar.SUNDAY));
	

		Christmasmarket m18 = new Christmasmarket("Winter im MQ", date("2018-11-08"), date("2018-12-23"), "1070",
				"Wien", "Museumsplatz 1", new LatLng("48.203195", "16.358634"));
		markets.add(m18);
		m18.addNormalOpeningHours(new NormalOpeningHours(true, uhr("16:00"), uhr("23:00"), Calendar.MONDAY));
		m18.addNormalOpeningHours(new NormalOpeningHours(true, uhr("16:00"), uhr("23:00"), Calendar.TUESDAY));
		m18.addNormalOpeningHours(new NormalOpeningHours(true, uhr("16:00"), uhr("23:00"), Calendar.WEDNESDAY));
		m18.addNormalOpeningHours(new NormalOpeningHours(true, uhr("16:00"), uhr("23:00"), Calendar.THURSDAY));
		m18.addNormalOpeningHours(new NormalOpeningHours(true, uhr("16:00"), uhr("23:00"), Calendar.FRIDAY));
		m18.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("23:00"), Calendar.SATURDAY));
		m18.addNormalOpeningHours(new NormalOpeningHours(true, uhr("12:00"), uhr("23:00"), Calendar.SUNDAY));
	
				Christmasmarket m19 = new Christmasmarket("Weihnachtlicher Adventmarkt im Verkehrsmuseum Remise", date("2018-11-30"), date("2018-12-16"),
				"1300", "Wien", "Ludwig-Koeßler-Platz", new LatLng("48.197050", "16.408450"));
		markets.add(m19);
		m19.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.MONDAY));
		m19.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.TUESDAY));
		m19.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.WEDNESDAY));
		m19.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.THURSDAY));
		m19.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.FRIDAY));
		m19.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.SATURDAY));
		m19.addNormalOpeningHours(new NormalOpeningHours(true, uhr("14:00"), uhr("21:00"), Calendar.SUNDAY));	
		
		
		this.repo.save(markets);

	}

}
